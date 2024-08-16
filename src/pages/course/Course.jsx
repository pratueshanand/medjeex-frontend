import React from "react";
import CourseImage from "../../asset/images/Designer.jpeg";
import ProductCard from "../../component/productCard/ProductCard";
import Navbar from "../../component/navbar/Navbar";

const Course = () => {
  const products = [
    {
      image: CourseImage,
      title: "SGP Program",
      rating: 5,
      price: 2999,
    },
    {
      image: CourseImage,
      title: "Mentorship Program",
      rating: 5,
      price: 1499,
    },
    // Add more products here
  ];

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            title={product.title}
            rating={product.rating}
            price={product.price}
          />
        ))}
      </div>
    </>
  );
};

export default Course;
