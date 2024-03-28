// StudentButtons.js

import React from 'react';
import { Link } from 'react-router-dom';

const StudentButtons = () => {
  return (
    <div>
      <Link to="/add-remove-students">
        <button>Add/Remove Students</button>
      </Link>
      <Link to="/grade-students">
        <button>Grade Students</button>
      </Link>
    </div>
  );
};

export default StudentButtons;
