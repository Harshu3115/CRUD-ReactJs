# React CRUD Operation

A simple and responsive **CRUD (Create, Read, Update, Delete)** application built with **React.js**. This project demonstrates how to manage data using React components, hooks, and API integration.

## 🚀 Features

* ➕ Add new records
* 📋 Display all records
* ✏️ Update existing records
* ❌ Delete records
* 🔍 Search records
* ✅ Form validation
* 📱 Responsive user interface
* 🔔 Toast notifications for success and error messages

## 🛠️ Technologies Used

* React.js
* JavaScript (ES6+)
* HTML5
* CSS3
* Axios
* React Icons
* React Toastify
* JSON Server (Mock REST API)

## 📂 Project Structure

```text
src/
│── components/
│   ├── StudentForm.jsx
│   ├── ShowTable.jsx
│── services/
│   ├── services.js
│── App.jsx
│── main.jsx
│── index.css
db.json
package.json
```

## 📸 Application Features

* Add student details
* View all students in a table
* Edit student information
* Delete student records
* Search students by name
* Real-time UI updates
* User-friendly design

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/Harshu3115/CRUD-ReactJs.git
```

### 2. Navigate to the project folder

```bash
cd CRUD-ReactJs
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the React application

```bash
npm run dev
```

### 5. Start JSON Server

```bash
npx json-server --watch db.json --port 3030
```

The application will run on:

* React App: `http://localhost:5173`
* JSON Server API: `http://localhost:3030`

## 📡 API Endpoints

| Method | Endpoint        | Description       |
| ------ | --------------- | ----------------- |
| GET    | `/students`     | Get all students  |
| POST   | `/students`     | Add a new student |
| PUT    | `/students/:id` | Update a student  |
| DELETE | `/students/:id` | Delete a student  |

## 📷 Screenshots

Add screenshots of your application here.

Example:

* Home Page
* Add Student Form
* Student Table
* Update Student
* Search Feature

## 🎯 Future Improvements

* Authentication and Login
* Pagination
* Sorting
* Dark Mode
* Export data to Excel/PDF
* Dashboard with Charts
* Backend using Node.js & Express
* Database integration with MongoDB or MySQL

## 👨‍💻 Author

**Harshad Shinde**

* GitHub: https://github.com/Harshu3115

## ⭐ Support

If you found this project helpful, consider giving it a **⭐ Star** on GitHub.
