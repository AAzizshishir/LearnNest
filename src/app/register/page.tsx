"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

import { useState, ChangeEvent, FormEvent } from "react";
import toast from "react-hot-toast";

type RegisterFormData = {
  name: string;
  email: string;
  password: string;
  image: File | null;
};

const RegisterPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<RegisterFormData>({
    name: "",
    email: "",
    password: "",
    image: null,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Imgbb Image
    const imageFile = new FormData();
    if (formData.image) {
      imageFile.append("image", formData.image);
    }
    const imgbbApiKey = process.env.NEXT_PUBLIC_IMGBB_API_KEY;
    const res = await fetch(
      `https://api.imgbb.com/1/upload?key=${imgbbApiKey}`,
      {
        method: "POST",
        body: imageFile,
      }
    );

    const data = await res.json();
    console.log("data", data);
    let imageUrl: string | null = null;
    if (data.success) {
      imageUrl = data.data.url;
    }
    console.log("imageUrl", imageUrl);

    try {
      const { data, error } = await authClient.signUp.email({
        name: formData.name,
        email: formData.email,
        image: imageUrl ?? undefined,
        password: formData.password,
      });
      console.log("From data", data, error);
      if (error) {
        toast.error("Login failed. Please check your credentials.");
      } else if (!error) {
        toast.success("Login successful! Redirecting...");
        router.push("/");
      }
    } catch (error) {
      console.log(error);
      toast.error("Unexpected error during login");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <Card className="w-100 mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl mx-auto">Register</CardTitle>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="name" className="mb-2">
                Name
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="email" className="mb-2">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="password" className="mb-2">
                Password
              </Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="********"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="image" className="my-2">
                Image
              </Label>
              <Input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
            </div>
          </CardContent>
          <CardFooter className="mt-4">
            <Button type="submit" className="w-full">
              Create Account
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default RegisterPage;
