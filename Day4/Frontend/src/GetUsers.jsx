import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const GetUsers = () => {
  const [studentDetails, setStudentDetails] = useState([]);

  const fetchStudentdetails = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/getAllStudents");
      setStudentDetails(res.data.allStudentDetails);
      toast.success("Student details fetched successfully");
    } catch (error) {
      toast.error("Error fetching student details");
    }
  };

  return (
    <div className="m-3">
      <button 
        className="btn btn-primary mb-3" 
        onClick={fetchStudentdetails}
      >
        Fetch Students
      </button>

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
          </tr>
        </thead>

        <tbody>
          {studentDetails.map((std) => (
            <tr key={std._id}>
              <td>{std.name}</td>
              <td>{std.email}</td>
              <td>{std.type}</td>
              <td>{std.phone}</td>
              <td>{std.gender}</td>
              <td>{std.branch}</td>
              <td>{std.rollno}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GetUsers;
