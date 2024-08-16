import React from 'react'
import Carousel from '../../component/carousel/Carousel'
import myimage from '../../asset/images/carousel_image1.jpg'; 
import Navbar from '../../component/navbar/Navbar';
import GetStarted from "../../component/getStarted/GetStarted";
import Mission from "../../component/mission_medjeex/Mission"
import WhyMedJeex from '../../component/whymedjeex/WhyMedJeex';
import Footer from "../../component/footer/Footer"

const Home = () => {

    const imagesSet1 = [
        myimage,
        "https://images.pexels.com/photos/1237119/pexels-photo-1237119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/1767439/pexels-photo-1767439.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      ];


  return (
    <>
    <Navbar/>
    <Carousel images={imagesSet1}/>
    <GetStarted/>
    <Mission/>
    <WhyMedJeex/>
    <Footer/>
    </>
  )
}

export default Home;