import Banner from "../../components/banner/Banner";
import Newsletter from "./Newsletter";
import TopCourses from "./TopCouorses";
import TopInstructors from "./TopInstructors";
import "./Home.css"

const Home = () => {
  return (
    <>
   <Banner></Banner>
     <TopCourses></TopCourses>
     <TopInstructors></TopInstructors>
     <Newsletter></Newsletter>
    </>
  );
};

export default Home;
