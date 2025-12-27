import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const instructors = [
    {
        id: 9,
        name: "Samantha Wilson",
        students: 800,
        image: "https://i.ibb.co/BBxjH5x/image.png",
        classes: ["Landscape Photography", "Wildlife Photography"],
    },
    {
        id: 11,
        name: "Michelle Jones",
        students: 600,
        image: "https://i.ibb.co/D7MmC8C/image.png",
        classes: ["Wedding Photography", "Product Photography"],
    },
    {
        id: 3,
        name: "David Wilson",
        students: 350,
        image: "https://i.ibb.co/cDNzkrM/image.png",
        classes: ["Street Photography", "Macro Photography"],
    },
    {
        id: 1,
        name: "John Smith",
        students: 200,
        image: "https://i.ibb.co/MhyswDy/image.png",
        classes: ["Introduction to Photography", "Landscape Photography"],
    },
    {
        id: 12,
        name: "Mark Williams",
        students: 180,
        image: "https://i.ibb.co/XVCw2HY/image.png",
        classes: ["Night Photography", "Portrait Photography"],
    },
    {
        id: 6,
        name: "Robert Thompson",
        students: 50,
        image: "https://i.ibb.co/6HMKRgP/image.png",
        classes: ["Street Photography", "Fine Art Photography"],
    },
];

const TopInstructors = () => {
    return (
        <section className="bg-gray-100 p-6">
            <div className="mx-auto text-center w-1/2 my-20">
                <h3 className="text-4xl font-semibold uppercase py-4">
                    Our Top Instructors
                </h3>
            </div>

            <Swiper
                modules={[Navigation]}
                navigation
                spaceBetween={20}
                slidesPerView={3}
                breakpoints={{
                    0: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                className="max-w-[1500px] mx-auto mb-24"
            >
                {instructors.map((inst) => (
                    <SwiperSlide key={inst.id}>
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition hover:shadow-xl">
                            {/* Image */}
                            <img
                                src={inst.image}
                                alt={inst.name}
                                className="w-full h-[350px] object-cover"
                            />

                            {/* Content */}
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-xl font-semibold">
                                        {inst.name}
                                    </h3>
                                    <span className="text-sm bg-purple-600 text-white px-3 py-1 rounded-full">
                                        Top
                                    </span>
                                </div>

                                <p className="text-gray-600 mb-4">
                                    Students: {inst.students}
                                </p>

                                {/* Class Badges */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {inst.classes.map((cls, idx) => (
                                        <span
                                            key={idx}
                                            className="border border-gray-300 text-sm px-3 py-1 rounded-full text-gray-700"
                                        >
                                            {cls}
                                        </span>
                                    ))}
                                </div>

                                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg transition">
                                    See Classes
                                </button>
                            </div>
                        </div>

                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default TopInstructors;
