import React from 'react'
import "./Mission.css"

const Mission = () => {
  return (
    <div className="mission_main">
      <div className="mission_heading">
        <h2>MISSION MEDJEEX</h2>
      </div>
      <div className="mission_card">
        <div className="mission_section">
          <h1>Comprehensive Curriculum & Expert Faculty</h1>
          <p>
            Our well-structured curriculum covers all relevant topics thoroughly, focusing on both foundational concepts and advanced material. 
            With access to experienced teachers, students receive content delivered effectively, along with personalized guidance and mentorship 
            to help them reach their full potential.
          </p>
        </div>
        <div className="mission_section2">
          <h1>Interactive Learning & Regular Assessments</h1>
          <p>
            We utilize modern educational tools such as online resources, interactive simulations, and practice tests to reinforce learning and 
            problem-solving skills. Additionally, we provide frequent quizzes, tests, and assignments to evaluate progress, coupled with constructive 
            feedback to help students improve and address weaknesses.
          </p>
        </div>
        <div className="mission_section3">
          <h1>Strategic Exam Preparation & Supportive Environment</h1>
          <p>
            Tailored coaching on exam strategies, time management, and practice under simulated exam conditions builds confidence and familiarity 
            with the format. These components collectively create a supportive environment that enhances students' understanding, problem-solving 
            abilities, and exam readiness.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Mission