import React, { useState, useEffect } from "react";
import { Button, ListGroup } from 'react-bootstrap';

const AddRemoveStudents = () => {
  const [students, setStudents] = useState([]);
  const [selectedStudents, setSelectedStudents] = useState([]);

  useEffect(() => {
    fetch("https://scale-zv1b.onrender.com/api/students")
      .then((response) => response.json())
      .then((data) => setStudents(data))
      .catch((error) => console.error("Error fetching students:", error));
  }, []);

  const handleSelect = (studentId) => {
    if (selectedStudents.length < 4) {
      setSelectedStudents((prevSelected) => [...prevSelected, studentId]);
    } else {
      alert("You can select a maximum of 4 students.");
    }
  };

  const handleRemove = (studentId) => {
    setSelectedStudents((prevSelected) =>
      prevSelected.filter((id) => id !== studentId)
    );
  };

  const handleAdd = () => {
    if (selectedStudents.length > 4) {
      alert("You can select a maximum of 4 students.");
      return;
    }

    const mentorId = "660481f7b75dfc73cc82b015";
    fetch(`https://scale-zv1b.onrender.com/api/mentor/${mentorId}/student`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        students: selectedStudents,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (selectedStudents.length > 4) {
          alert("You can select a maximum of 4 students.");
          window.location.href = "/";
        } else {
          window.location.href = "/";
        }
      })
      .catch((error) => console.error("Error adding students:", error));
  };

  return (
    <div>
      <h2>Add/Remove Students</h2>
      <ListGroup>
        {students.map((student) => (
          <ListGroup.Item
            key={student._id}
            className={selectedStudents.includes(student._id) ? "selected" : ""}
            style={selectedStudents.includes(student._id) ? { backgroundColor: "lightblue" } : null}
          >
            <h3>{student.email}</h3>
            <Button variant="primary" onClick={() => handleSelect(student._id)}>Select</Button>
            <Button variant="danger" onClick={() => handleRemove(student._id)}>Remove</Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <Button variant="success" onClick={handleAdd}>Add Students</Button>
      </div>
    </div>
  );
};

export default AddRemoveStudents;
