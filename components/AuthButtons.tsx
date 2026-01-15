"use client";

import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

export default function AuthButtons() {
  // google login
  const handleGoogleLogin = async () => {
    try {
      await authClient.signIn.social({
        provider: "google",
      });
      toast.success("Google login successful");
    } catch (error) {
      toast.error("Google login failed");
    }
  };

  // Github login
  const handleGithubLogin = async () => {
    try {
      await authClient.signIn.social({
        provider: "github",
      });
      toast.success("Github login successful");
    } catch (error) {
      toast.error("Github login failed");
    }
  };

  return (
    <div className="flex flex-col gap-4 w-87.5 mx-auto my-4">
      {/* Google Button */}
      <Button
        variant="outline"
        className="flex items-center gap-2"
        onClick={handleGoogleLogin}
      >
        <FcGoogle className="w-5 h-5" />
        Continue with Google
      </Button>

      {/* GitHub Button */}
      <Button
        variant="outline"
        className="flex items-center gap-2"
        onClick={handleGithubLogin}
      >
        <FaGithub className="w-5 h-5" />
        Continue with GitHub
      </Button>
    </div>
  );
}
