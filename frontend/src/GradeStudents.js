import React, { useState, useEffect } from "react";
import { Button, Form } from 'react-bootstrap';

const GradeStudents = () => {
  const [student_id, setStudentId] = useState(
    localStorage.getItem("student_id")
  );
  const [idea, setIdea] = useState("");
  const [execution, setExecution] = useState("");
  const [viva, setViva] = useState("");
  const [total, setTotal] = useState("");

  useEffect(() => {
    // Update the total whenever idea, execution, or viva changes
    setTotal(Number(idea) + Number(execution) + Number(viva));
  }, [idea, execution, viva]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const bodyContent = {
      idea,
      execution,
      viva,
      total,
    };
    const headersList = {
      "Content-Type": "application/json",
    };
    let response = await fetch(
      `https://scale-zv1b.onrender.com/api/student/${student_id}/score`,
      {
        method: "PUT",
        body: JSON.stringify(bodyContent),
        headers: headersList,
      }
    );
    let data = await response.text();
    window.location.href = "/";
  };

  return (
    <div>
      <h2>Grade Students</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="idea">
          <Form.Label>Idea:</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter marks"
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="execution">
          <Form.Label>Execution:</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter marks"
            value={execution}
            onChange={(e) => setExecution(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="viva">
          <Form.Label>Viva:</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter marks"
            value={viva}
            onChange={(e) => setViva(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="total">
          <Form.Label>Total:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Total"
            value={total}
            readOnly
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default GradeStudents;
