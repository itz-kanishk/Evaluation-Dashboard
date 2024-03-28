import React from 'react';
import { Card, Button } from 'react-bootstrap';

const StudentCard = ({ student, deleteStudent }) => {
  return (
    <Card className="mb-3" style={{ maxWidth: '18rem' }}>
      <Card.Body>
        <Card.Title>{student.email}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Grade: {student.total}</Card.Subtitle>
        <Card.Text>
          <strong>Idea:</strong> {student.idea} <br />
          <strong>Execution:</strong> {student.execution} <br />
          <strong>Viva:</strong> {student.viva}
        </Card.Text>
        <div className="d-flex justify-content-between">
          <Button variant="primary" onClick={() => {
            localStorage.setItem("student_id", student._id);
            window.location.href = "/grade-students";
          }}>
            Change Grade
          </Button>
          <Button variant="danger" onClick={() => deleteStudent(student._id)} style={{ marginLeft: '10px' }}>
            Delete Student
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default StudentCard;
