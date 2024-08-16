import React from "react";
import Carousel from "../../component/carousel/Carousel";
import myimage from "../../asset/images/carousel_image1.jpg";
import myimage2 from "../../asset/images/Designer.jpeg";
import Navbar from "../../component/navbar/Navbar";
import GetStarted from "../../component/getStarted/GetStarted";
import Mission from "../../component/mission_medjeex/Mission";
import WhyMedJeex from "../../component/whymedjeex/WhyMedJeex";
import Footer from "../../component/footer/Footer";

const Home = () => {
  const imagesSet1 = [myimage, myimage2];

  return (
    <>
      <Navbar />
      <Carousel images={imagesSet1} />
      <GetStarted />
      <Mission />
      <WhyMedJeex />
      <Footer />
    </>
  );
};
export default Home;
