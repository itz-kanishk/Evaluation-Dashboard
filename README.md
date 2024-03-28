# Evaluation Dashboard

Evaluation Dashboard is a web application built using React in the frontend and Node.js with Express and MongoDB in the backend. It serves as a tool for mentors to manage and evaluate their assigned students.

## Features

- Allows mentors to add and remove students assigned to them.
- Provides the functionality for mentors to grade students based on three parameters: idea, execution, and viva.
- Enforces a limit of four students per mentor; attempting to assign more than four students will trigger an alert and redirect the mentor to the home screen.
- Single-page application design for seamless user experience.
- Responsive design using React Bootstrap components.

## Demo

You can access the live demo of the Evaluation Dashboard [here](https://evaluation-dashboard-flame.vercel.app/).

## Technologies Used

- Frontend:
  - React
  - React Bootstrap
- Backend:
  - Node.js
  - Express.js
  - MongoDB

## Installation

To run the Evaluation Dashboard locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/itz-kanishk/evaluation-dashboard.git
   ```

2. Navigate to the project directory:

   ```bash
   cd evaluation-dashboard
   ```

3. **Backend Installation:**

   - Navigate to the `backend` directory:

     ```bash
     cd backend
     ```

   - Install backend dependencies:

     ```bash
     npm install
     ```

   - Start the backend server:

     ```bash
     npm start
     ```

4. **Frontend Installation:**

   - Navigate back to the project root directory:

     ```bash
     cd ..
     ```

   - Install frontend dependencies:

     ```bash
     npm install
     ```

   - Start the frontend:

     ```bash
     npm start
     ```

## Usage

Once the application is running locally, you can access it in your web browser. Follow the on-screen instructions to manage your assigned students and grade them accordingly.

## Contributing

Contributions to the Evaluation Dashboard project are welcome! If you find any bugs or have suggestions for new features, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
```

