import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./pages/home/Home.jsx";
import Course from "./pages/course/Course";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/courses" element={<Course/>} />
    </Routes>
  );
}

export default App;
