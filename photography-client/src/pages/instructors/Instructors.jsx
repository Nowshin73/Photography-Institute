
import instructors from "../../data/instructors";
import InstructorCard from "./InstructorCard";


const Instructors = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-3xl font-semibold mb-8">Instructors</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {instructors.map((inst) => (
          <InstructorCard key={inst.id} instructor={inst} />
        ))}
      </div>
    </div>
  );
};

export default Instructors;
