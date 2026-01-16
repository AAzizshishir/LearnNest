"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Banner = () => {
  const slides = [
    {
      image:
        "https://i.ibb.co.com/60WD5b6N/edtech-education-technology-distance-learning-260nw-1942997950.webp",
      title: "Learn Modern Web Development",
      description: "Master React, Next.js, and scalable architectures.",
      link: "/web-development",
    },
    {
      image: "https://i.ibb.co.com/vNmd4Th/istockphoto-1462942852-612x612.jpg",
      title: "Data Science & AI",
      description: "Dive into machine learning and AI-driven solutions.",
      link: "/courses/data-science",
    },
    {
      image: "https://i.ibb.co.com/KpfsMXXz/istockphoto-1445202815-612x612.jpg",
      title: "Cloud & DevOps",
      description: "Build and deploy apps with AWS, Docker, and Kubernetes.",
      link: "/courses/cloud-devops",
    },
  ];

  return (
    <div className="w-full h-125">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
        className="h-full"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="h-full w-full bg-cover bg-center flex items-center justify-center text-center relative"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/70" />

              {/* Content */}
              <div className="relative z-10 max-w-xl mx-auto text-white space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-xl">{slide.description}</p>
                <Link href={slide.link}>
                  <Button className="mt-4 bg-red-500 text-white hover:bg-red-600">
                    Explore Courses
                  </Button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
