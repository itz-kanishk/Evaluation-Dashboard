// App.js

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddRemoveStudents from "./AddRemoveStudents"; // Replace with your actual components
import Home from "./Home.js"; // Replace with your actual components
import GradeStudents from "./GradeStudents"; // Replace with your actual components
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './Home.css'; // Fix the import statement

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/grade-students" element={<GradeStudents />} />
          <Route path="/add-remove-students" element={<AddRemoveStudents />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
