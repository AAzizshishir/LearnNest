import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface CourseCardProps {
  id: string;
  category: string;
  instructor: string;
  title: string;
  students: number;
  lessons: number;
  price: number;
  image: string;
}

const CourseCard = ({
  id,
  category,
  instructor,
  title,
  students,
  lessons,
  price,
  image,
}: CourseCardProps) => {
  return (
    <div className="relative rounded-lg overflow-hidden shadow hover:shadow-lg transition">
      {/* Background Image */}
      <div className="h-48 w-full relative">
        <Image src={image} alt={title} fill className="object-cover" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="p-4 bg-white">
        <span className="text-xs font-semibold text-red-500 uppercase ">
          {category}
        </span>
        <h3 className="text-lg font-bold mt-1 text-gray-600">{title}</h3>
        <p className="text-sm text-gray-600">By {instructor}</p>

        {/* Stats */}
        <div className="flex items-center justify-between text-sm text-gray-700 mt-3">
          <span>{students} students</span>
          <span>{lessons} lessons</span>
          <span className="font-semibold text-red-500">${price}</span>
        </div>

        {/* Button */}
        <Link href={`/course-details/${id}`}>
          <Button className="w-full mt-4 bg-red-500 text-white hover:bg-red-600">
            Course Details
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
