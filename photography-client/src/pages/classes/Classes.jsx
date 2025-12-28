import React from "react";

const classesData = [
  {
    id: 1,
    name: "Mobile Photography",
    instructor: "Emily Davis",
    seats: 0,
    price: 59.99,
    image: "https://i.ibb.co/sv0Cd4n/image.png",
  },
  {
    id: 2,
    name: "Introduction to Photography",
    instructor: "John Smith",
    seats: 150,
    price: 49.99,
    image: "https://i.ibb.co/C7Z3YMd/image.png",
  },
  {
    id: 3,
    name: "Nature Photography",
    instructor: "Emily Davis",
    seats: 15,
    price: 49.99,
    image: "https://i.ibb.co/jTBHGzs/image.png",
  },
  {
    id: 4,
    name: "Product Photography",
    instructor: "John Smith",
    seats: 8,
    price: 69.99,
    image: "https://i.ibb.co/k5wyHZN/image.png",
  },
  {
    id: 5,
    name: "Food Photography",
    instructor: "Emily Davis",
    seats: 12,
    price: 54.99,
    image: "https://i.ibb.co/k5SK6pK/image.png",
  },
  {
    id: 6,
    name: "Landscape Photography",
    instructor: "Jane Johnson",
    seats: 10,
    price: 59.99,
    image: "https://i.ibb.co/mHxNNXY/image.png",
  },
  {
    id: 7,
    name: "Wildlife Photography",
    instructor: "John Smith",
    seats: 10,
    price: 59.99,
    image: "https://i.ibb.co/k9prMWQ/image.png",
  },
  {
    id: 8,
    name: "Abstract Photography",
    instructor: "David Wilson",
    seats: 8,
    price: 69.99,
    image: "https://i.ibb.co/Jq1qPb4/image.png",
  },
  {
    id: 9,
    name: "Fashion Photography",
    instructor: "Emily Davis",
    seats: 150,
    price: 54.99,
    image: "https://i.ibb.co/Z1ZcHY5/image.png",
  },
  {
    id: 10,
    name: "Macro Photography",
    instructor: "David Wilson",
    seats: 100,
    price: 59.99,
    image: "https://i.ibb.co/k9wMKmd/image.png",
  },
  {
    id: 11,
    name: "Black and White Photography",
    instructor: "David Wilson",
    seats: 500,
    price: 59.99,
    image: "https://i.ibb.co/CHbh219/image.png",
  },
  {
    id: 12,
    name: "Street Fashion Photography",
    instructor: "Jane Johnson",
    seats: 12,
    price: 54.99,
    image: "https://i.ibb.co/WpDYrWT/image.png",
  },
  {
    id: 13,
    name: "Night Photography",
    instructor: "John Smith",
    seats: 80,
    price: 69.99,
    image: "https://i.ibb.co/HTXJqJV/image.png",
  },
  {
    id: 14,
    name: "Travel Photography",
    instructor: "Jane Johnson",
    seats: 140,
    price: 54.99,
    image: "https://i.ibb.co/F3tj26y/image.png",
  },
  {
    id: 15,
    name: "Sports Photography",
    instructor: "Jane Johnson",
    seats: 12,
    price: 54.99,
    image: "https://i.ibb.co/TrynVGw/image.png",
  },
  {
    id: 16,
    name: "Wedding Photography",
    instructor: "David Wilson",
    seats: 10,
    price: 59.99,
    image: "https://i.ibb.co/XtrBvBT/image.png",
  },
  {
    id: 17,
    name: "Street Photography",
    instructor: "Jane Johnson",
    seats: 15,
    price: 49.99,
    image: "https://i.ibb.co/6854ZwF/image.png",
  },
  {
    id: 18,
    name: "Portrait Photography",
    instructor: "David Wilson",
    seats: 8,
    price: 69.99,
    image: "https://i.ibb.co/5kFQwyf/image.png",
  },
  {
    id: 19,
    name: "Architecture Photography",
    instructor: "Emily Davis",
    seats: 150,
    price: 49.99,
    image: "https://i.ibb.co/FYRf9w2/image.png",
  },
  {
    id: 20,
    name: "Underwater Photography",
    instructor: "John Smith",
    seats: 10,
    price: 59.99,
    image: "https://i.ibb.co/3NhQ551/image.png",
  },
];

const Classes = () => {
  return (
    <div className="bg-gray-100 p-6">
      <h1 className="text-2xl font-semibold mb-6">Classes</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {classesData.map((item) => (
          <div
            key={item.id}
            className={`bg-white rounded shadow-md p-4 flex flex-col items-center ${
              item.seats === 0 ? "bg-red-100" : ""
            }`}
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 rounded mb-4 object-cover"
            />

            <h2 className="text-lg font-semibold mb-1">{item.name}</h2>
            <p className="text-gray-500 mb-1">{item.instructor}</p>
            <p className="text-gray-500 mb-1">
              Available Seats: {item.seats}
            </p>
            <p className="text-gray-500 mb-2">Price: ${item.price}</p>

            <p className="text-red-500 text-sm text-center">
              Please log in to select the course.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Classes;
