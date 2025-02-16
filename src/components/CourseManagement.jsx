import React from "react";
import "./CourseManagement.css";

function CourseManagement() {
  return (
    <div className="course-management">
      <h2>Course Management</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Instructor</th>
            <th>Enrollments</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>React Basics</td>
            <td>Jane Doe</td>
            <td>120</td>
            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CourseManagement;