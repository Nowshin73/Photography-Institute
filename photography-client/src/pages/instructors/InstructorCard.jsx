import { Link } from "react-router-dom";

const InstructorCard = ({ instructor }) => {
  const { id, name, email, image, classes } = instructor;

  return (
    <div className="bg-white rounded-xl shadow-md p-5 flex flex-col items-center hover:shadow-lg transition">
      <img
        src={image}
        alt={name}
        className="w-32 h-32 rounded-full object-cover mb-4"
      />

      <h2 className="text-lg font-semibold mb-1">{name}</h2>
      <p className="text-gray-500 text-sm mb-3">{email}</p>

      <div className="mb-4 w-full">
        <p className="text-gray-600 font-medium mb-1">Classes:</p>
        <ul className="list-disc ml-5 text-sm text-gray-600 space-y-1">
          {classes.map((cls, idx) => (
            <li key={idx}>{cls}</li>
          ))}
        </ul>
      </div>

      <Link
        to={`/instructors/${id}`}
        className="mt-auto bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition"
      >
        See Classes
      </Link>
    </div>
  );
};

export default InstructorCard;
