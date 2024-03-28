import React, { useState, useEffect } from "react";
import { Row, Col, Button } from 'react-bootstrap';
import StudentCard from './StudentCard';

const Home = () => {
  const mentor_id = "660481f7b75dfc73cc82b015";
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch(`https://scale-zv1b.onrender.com/api/mentor/${mentor_id}/students`)
      .then((response) => response.json())
      .then((data) => setStudents(data))
      .catch((error) => console.error("Error fetching students:", error));
  }, []);

  const deleteStudent = (student_id) => {
    const mentorid = "660481f7b75dfc73cc82b015";
    fetch(
      `https://scale-zv1b.onrender.com/api/mentor/${mentorid}/student/${student_id}`,
      {
        method: "DELETE",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setStudents(students.filter((student) => student._id !== student_id));
      })
      .catch((error) => console.error("Error deleting student:", error));
  };

  return (
    <div>
      <style>{`
        body {
          background-color: #C4E4FF; /* Blue color */
          margin: 0; /* Remove default margin */
          padding: 0; /* Remove default padding */
        }
      `}</style>
      <div className="container">
        <div className="header">
          <h1>Evaluation Dashboard</h1>
          <p>Welcome Mentor!</p>
          <p>These are your students</p>
        </div>
        <Row xs={1} md={2} lg={4} className="g-4">
          {students.map((student) => (
            <Col key={student._id}>
              <StudentCard student={student} deleteStudent={deleteStudent} />
            </Col>
          ))}
        </Row>
        <div className="add-button">
          <Button variant="success" onClick={() => { window.location.href = "/add-remove-students"; }}>
            Add Students
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
