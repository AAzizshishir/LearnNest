import CourseCard from "@/components/CourseCard";

const WebDevelopment = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto my-8">
      <CourseCard
        id="1"
        category="web developemnt"
        instructor="David Warner"
        title="React – The Complete Guide (React Router)"
        students={1}
        lessons={10}
        price={166}
        image="https://i.ibb.co.com/vNmd4Th/istockphoto-1462942852-612x612.jpg"
      />
      <CourseCard
        id="2"
        category="web developemnt"
        instructor="David Warner"
        title="React – The Complete Guide (React Router)"
        students={1}
        lessons={10}
        price={166}
        image="https://i.ibb.co.com/vNmd4Th/istockphoto-1462942852-612x612.jpg"
      />
      <CourseCard
        id="3"
        category="web developemnt"
        instructor="David Warner"
        title="React – The Complete Guide (React Router)"
        students={1}
        lessons={10}
        price={166}
        image="https://i.ibb.co.com/vNmd4Th/istockphoto-1462942852-612x612.jpg"
      />
      <CourseCard
        id="4"
        category="web developemnt"
        instructor="David Warner"
        title="React – The Complete Guide (React Router)"
        students={1}
        lessons={10}
        price={166}
        image="https://i.ibb.co.com/vNmd4Th/istockphoto-1462942852-612x612.jpg"
      />
    </section>
  );
};

export default WebDevelopment;
