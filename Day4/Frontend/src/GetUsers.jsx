// src/GetUsers.jsx
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const GetUsers = () => {
  const [studentDetails, setStudentDetails] = useState([]);
  const navigate = useNavigate();

  const fetchStudentdetails = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/getAllStudents");
      setStudentDetails(res.data.allStudentDetails || []);
      toast.success("Student details fetched successfully");
    } catch (error) {
      console.error(error);
      toast.error("Error fetching student details");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this student?")) return;
    try {
      await axios.delete(`http://localhost:3000/api/deleteStudent/${id}`);
      setStudentDetails(prev => prev.filter(s => s._id !== id));
      toast.success("Student deleted");
    } catch (err) {
      console.error(err);
      toast.error("Failed to delete student");
    }
  };

  const handleEdit = (id) => {
    // Navigate to EditUser page (route must exist in App.jsx)
    navigate(`/editUser/${id}`);
  };

  const handleAdd = () => {
    // Optional: keep Add button if you want; remove if you don't want add here
    navigate("/addUser");
  };

  return (
    <div className="m-3">
      <div className="d-flex mb-3 gap-2">
        <button className="btn btn-primary" onClick={fetchStudentdetails}>Fetch Students</button>
        <button className="btn btn-success" onClick={handleAdd}>Add Student</button>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th className="bg-success-subtle">Name</th>
            <th className="bg-success-subtle">Email</th>
            <th className="bg-success-subtle">Type</th>
            <th className="bg-success-subtle">Phone</th>
            <th className="bg-success-subtle">Gender</th>
            <th className="bg-success-subtle">Branch</th>
            <th className="bg-success-subtle">RollNo</th>
            <th className="bg-success-subtle">Actions</th>
          </tr>
        </thead>

        <tbody>
          {studentDetails.length === 0 ? (
            <tr>
              <td colSpan={8} className="text-center">No students to display</td>
            </tr>
          ) : (
            studentDetails.map((std) => (
              <tr key={std._id}>
                <td>{std.name}</td>
                <td>{std.email}</td>
                <td>{std.type}</td>
                <td>{std.phone}</td>
                <td>{std.gender}</td>
                <td>{std.branch}</td>
                <td>{std.rollno}</td>
                <td>
                  <div className="d-flex gap-2">
                    <button
                      className="btn btn-sm btn-warning"
                      onClick={() => handleEdit(std._id)}
                    >
                      Edit
                    </button>

                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleDelete(std._id)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default GetUsers;
