import React from 'react'
import Carousel from '../../component/carousel/Carousel'
import Card from '../../component/card/Card';
import myimage from '../../asset/images/carousel_image1.jpg'; 
import Navbar from '../../component/navbar/Navbar'

const home = () => {

    const imagesSet1 = [
        myimage,
        "https://images.pexels.com/photos/1237119/pexels-photo-1237119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/1767439/pexels-photo-1767439.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      ];


  return (
    <>
    <Navbar/>
    <Carousel images={imagesSet1}/>
    <div className="flex items-center justify-centerflex justify-between items-center h-64 w-full">
        <Card/>
        <Card/>
        <Card/>
    </div>
    </>
  )
}

export default home