import Link from "next/link";
import { Button } from "./ui/button";

const TrendingCourses = () => {
  const categories = [
    {
      name: "Web Development",
      courses: 5,
      color: "bg-green-500",
      link: "/web-development",
    },
    {
      name: "Photography",
      courses: 3,
      color: "bg-orange-500",
      link: "/photography",
    },
    {
      name: "Graphics Design",
      courses: 5,
      color: "bg-teal-500",
      link: "/graphics-design",
    },
    {
      name: "Web Language",
      courses: 3,
      color: "bg-blue-500",
      link: "/web-language",
    },
  ];

  return (
    <section className="w-full py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h4 className="text-sm font-semibold text-red-500 uppercase">
              Courses Categories
            </h4>
            <h2 className="text-2xl md:text-3xl font-bold">
              Browse Trending Categories
            </h2>
          </div>
          <Button asChild>
            <Link
              href="/courses"
              className="bg-red-500 text-white font-medium hover:bg-red-600"
            >
              View All →
            </Link>
          </Button>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              href={cat.link}
              className={`${cat.color} text-white rounded-lg p-6 shadow hover:shadow-lg transition py-14`}
            >
              <h3 className="text-lg font-bold">{cat.name}</h3>
              <p className="text-sm">{cat.courses} Courses</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingCourses;
