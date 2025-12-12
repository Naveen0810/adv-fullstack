// src/EditUser.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    type: "student",
    phone: "",
    gender: "",
    branch: "",
    rollno: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // fetch student by id and populate form
    const fetchStudent = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`http://localhost:3000/api/getStudents/${id}`);
        const s = res.data.studentdetails || {};
        setUserDetails({
          name: s.name || "",
          email: s.email || "",
          type: s.type || "student",
          phone: s.phone ? String(s.phone) : "",
          gender: s.gender || "",
          branch: s.branch || "",
          rollno: s.rollno || "",
        });
      } catch (err) {
        console.error("Failed to fetch student:", err);
        toast.error("Failed to load student");
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchStudent();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // basic validation
    if (!userDetails.name || !userDetails.email) {
      toast.error("Please fill name and email");
      return;
    }

    try {
      const payload = {
        name: userDetails.name,
        email: userDetails.email,
        type: userDetails.type,
        phone: userDetails.phone ? Number(userDetails.phone) : undefined,
        gender: userDetails.gender,
        branch: userDetails.branch,
        rollno: userDetails.rollno,
      };

      const res = await axios.put(
        `http://localhost:3000/api/updateStudent/${id}`,
        payload
      );

      if (res.status === 200) {
        toast.success("User updated successfully");
        // navigate back to list or wherever you prefer
        setTimeout(() => navigate("/getUsers"), 800);
      } else {
        toast.error("Failed to update user");
      }
    } catch (err) {
      console.error("Update error:", err);
      toast.error("Error updating user");
    }
  };

  if (loading) return <div className="m-4">Loading...</div>;

  return (
    <div className="m-4 p-4">
      <h1>Edit User</h1>

      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          name="name"
          value={userDetails.name}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        <label>Email:</label>
        <input
          name="email"
          type="email"
          value={userDetails.email}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        <label>Type:</label>
        <select name="type" value={userDetails.type} onChange={handleChange}>
          <option value="student">student</option>
          <option value="staff">staff</option>
        </select>
        <br />
        <br />

        <label>Phone:</label>
        <input
          name="phone"
          type="tel"
          value={userDetails.phone}
          onChange={handleChange}
          placeholder="9876543210"
        />
        <br />
        <br />

        <label>Gender:</label>
        <label style={{ marginLeft: 8 }}>
          <input
            name="gender"
            type="radio"
            value="male"
            checked={userDetails.gender === "male"}
            onChange={handleChange}
          />{" "}
          Male
        </label>
        <label style={{ marginLeft: 12 }}>
          <input
            name="gender"
            type="radio"
            value="female"
            checked={userDetails.gender === "female"}
            onChange={handleChange}
          />{" "}
          Female
        </label>
        <br />
        <br />

        <label>Branch:</label>
        <select name="branch" value={userDetails.branch} onChange={handleChange}>
          <option value="">Select Branch</option>
          <option value="CSE">CSE</option>
          <option value="ECE">ECE</option>
          <option value="MECH">MECH</option>
          <option value="CIVIL">CIVIL</option>
          <option value="IT">IT</option>
        </select>
        <br />
        <br />

        <label>Roll No:</label>
        <input
          name="rollno"
          value={userDetails.rollno}
          onChange={handleChange}
        />
        <br />
        <br />

        <div className="row my-4 btn-container">
          <button type="submit" className="btn btn-primary">
            Update User
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => navigate(-1)}
            style={{ marginLeft: 8 }}
          >
            Cancel
          </button>
        </div>
      </form>

      <ToastContainer position="top-right" autoClose={2500} />
    </div>
  );
};

export default EditUser;
