// src/AddUser.jsx
import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddUser = () => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    type: "student",   // default
    phone: "",
    gender: "",
    branch: "",
    rollno: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({ ...prev, [name]: value }));
  };

  const addUserHandler = async (e) => {
    e.preventDefault();

    if (!userDetails.name || !userDetails.email) {
      toast.error("Please enter name and email");
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
        rollno: userDetails.rollno
      };

      const res = await axios.post("http://localhost:3000/api/addStudent", payload);

      if (res.status === 201 || res.status === 200) {
        toast.success("User added successfully");
        // reset form
        setUserDetails({
          name: "",
          email: "",
          type: "student",
          phone: "",
          gender: "",
          branch: "",
          rollno: ""
        });
      } else {
        toast.error("Failed to add user");
      }
    } catch (err) {
      console.error("Add user error:", err);
      toast.error("Error adding user");
    }
  };

  const resetHandle = () => {
    setUserDetails({
      name: "",
      email: "",
      type: "student",
      phone: "",
      gender: "",
      branch: "",
      rollno: ""
    });
    toast.info("Form reset");
  };

  return (
    <div className="m-4 p-4">
      <h1>Add User</h1>

      <form onSubmit={addUserHandler}>
        <label>Name:</label>
        <input
          name="name"
          value={userDetails.name}
          onChange={handleChange}
          required
        />
        <br /><br />

        <label>Email:</label>
        <input
          name="email"
          type="email"
          value={userDetails.email}
          onChange={handleChange}
          required
        />
        <br /><br />

        <label>Type:</label>
        <select name="type" value={userDetails.type} onChange={handleChange}>
          <option value="student">student</option>
          <option value="staff">staff</option>
        </select>
        <br /><br />

        <label>Phone:</label>
        <input
          name="phone"
          type="tel"
          value={userDetails.phone}
          onChange={handleChange}
          placeholder="9876543210"
        />
        <br /><br />

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
        <br /><br />

        <label>Branch:</label>
        <select name="branch" value={userDetails.branch} onChange={handleChange}>
          <option value="">Select Branch</option>
          <option value="CSE">CSE</option>
          <option value="ECE">ECE</option>
          <option value="MECH">MECH</option>
          <option value="CIVIL">CIVIL</option>
          <option value="IT">IT</option>
        </select>
        <br /><br />

        <label>Roll No:</label>
        <input
          name="rollno"
          value={userDetails.rollno}
          onChange={handleChange}
          placeholder="23CSR144"
        />
        <br /><br />

        <div className="row my-4 btn-container">
          <button type="submit" className="btn btn-primary">Add User</button>
          <button type="button" className="btn btn-warning" onClick={resetHandle}>Reset</button>
        </div>
      </form>

      <ToastContainer position="top-right" autoClose={2500} />
    </div>
  );
};

export default AddUser;
