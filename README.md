# Task Management Application

A simple task management application built with HTML, CSS, JavaScript, Node.js, and MySQL. This application allows users to add, view, update, and delete tasks, as well as mark them as completed or pending.

## Features

- Add new tasks with descriptions and due dates.
- View a list of tasks with their statuses and due dates.
- Toggle the status of tasks between pending and completed.
- Delete tasks from the list.

## Technologies Used

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express
- **Database:** MySQL

## Project Structure
task-management-app/frontend/index.html,styles.css,script.js

task-management-app/backend/index.js

task-management-app/README.md

### Frontend

- **index.html:** The main HTML file for the application.
- **styles.css:** The CSS file for styling the application.
- **script.js:** The JavaScript file for frontend logic and interaction.

### Backend

- **index.js:** The Node.js server file that handles API routes and database operations.

## Getting Started

### Prerequisites

- Node.js and npm installed
- MySQL installed and running

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/task-management-app.git
   cd task-management-app

2. Set up the backend:

  Navigate to the backend directory.

  Install the required Node.js packages:
    cd backend
    npm install
    Configure your MySQL database:

Create a database named todo_list.

Create a table with the following schema:

    CREATE TABLE tasks (
        task_id INT AUTO_INCREMENT PRIMARY KEY,
        description VARCHAR(255) NOT NULL,
        due_date DATE,
        status ENUM('pending', 'completed') DEFAULT 'pending'
        );
  Update the database connection details in index.js with your MySQL credentials.

3.Start the backend server:
          node index.js
    The server will run on http://localhost:3000.

4.Set up the frontend:
       Navigate to the frontend directory.
       Open index.html in your preferred web browser to view and interact with the application.
API Endpoints:

    POST /tasks - Create a new task
    
    GET /tasks - Retrieve all tasks
    
    PUT /tasks/
        - Update a task's status
        
    DELETE /tasks/
        - Delete a task
        
Contributing:
    Feel free to open issues or submit pull requests if you have any suggestions or improvements.
