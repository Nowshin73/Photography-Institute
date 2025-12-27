import { motion } from "framer-motion";

const courses = [
  {
    id: 1,
    title: "Introduction to Photography",
    students: 500,
    image: "https://i.ibb.co/C7Z3YMd/image.png",
  },
  {
    id: 2,
    title: "Fashion Photography",
    students: 400,
    image: "https://i.ibb.co/Z1ZcHY5/image.png",
  },
  {
    id: 3,
    title: "Macro Photography",
    students: 350,
    image: "https://i.ibb.co/k9wMKmd/image.png",
  },
  {
    id: 4,
    title: "Travel Photography",
    students: 300,
    image: "https://i.ibb.co/F3tj26y/image.png",
  },
  {
    id: 5,
    title: "Night Photography",
    students: 250,
    image: "https://i.ibb.co/HTXJqJV/image.png",
  },
  {
    id: 6,
    title: "Architecture Photography",
    students: 180,
    image: "https://i.ibb.co/FYRf9w2/image.png",
  },
];

const TopCourses = () => {
  return (
    <section className="mb-5 ">
      {/* Heading */}
      <div className="mx-auto text-center w-1/2 my-20">
        <h3 className="text-4xl font-semibold uppercase py-4">
          Our Top Online Courses
        </h3>
        <p className="text-gray-700 mb-2"></p>
      </div>

      {/* Courses Grid */}
      <div className="grid md:grid-cols-2 gap-4">
        {courses.map((course, index) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded shadow-md p-4 flex flex-col items-center justify-center"
          >
            <div className="overflow-hidden w-full">
              <img
                src={course.image}
                alt={course.title}
                className="classimg w-full h-[400px] "
              />
            </div>

            <span className="text-lg font-semibold mt-4">
              {course.title}
            </span>
            <span className="text-gray-500 mt-2">
              Students: {course.students}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TopCourses;
