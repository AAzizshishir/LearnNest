import Image from "next/image";
import { Button } from "@/components/ui/button";
import { courses } from "@/src/data/courses/Courses";

interface CoursePageProps {
  params: { id: string };
}

const CourseDetails = async ({ params }: CoursePageProps) => {
  const { id } = await params;
  const course = courses.find((c) => c.id === id);

  if (!course) {
    return <div className="p-6">Course not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="relative h-64 w-full mb-6">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover rounded-lg"
        />
      </div>

      <h1 className="text-3xl font-bold mb-2">{course.title}</h1>
      <p className="text-gray-600 mb-4">By {course.instructor}</p>
      <p className="text-sm text-gray-500 uppercase">{course.category}</p>

      <div className="flex gap-6 mt-4 text-gray-700">
        <span>👤 {course.students} students</span>
        <span>📄 {course.lessons} lessons</span>
        <span className="font-semibold">${course.price}</span>
      </div>

      <Button className="mt-6">Enroll Now</Button>
    </div>
  );
};

export default CourseDetails;
