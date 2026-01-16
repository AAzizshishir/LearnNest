import CourseCard from "@/components/CourseCard";
import { courses } from "@/src/data/courses/Courses";

const Courses = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto my-8">
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          id={course.id}
          category={course.category}
          instructor={course.instructor}
          title={course.title}
          students={course.students}
          lessons={course.lessons}
          price={course.price}
          image={course.image}
        />
      ))}
    </section>
  );
};

export default Courses;
