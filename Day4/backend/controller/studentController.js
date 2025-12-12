
const Student = require("../model/studentmodel");

const addStudent = async (req, res) => {
  try {
    const newStudent = new Student({
      name: req.body.name,
      email: req.body.email,
      type: req.body.type,
      phone: req.body.phone,
      gender: req.body.gender,
      branch: req.body.branch,
      rollno: req.body.rollno
    });

    const saved = await newStudent.save();
    return res.status(201).json({ message: "Student added successfully", student: saved });
  } catch (err) {
    console.error("addStudent error:", err);
    return res.status(500).json({ message: "Server error while adding student" });
  }
};

const getAllStudents = async (req, res) => {
  try {
    const allStudentDetails = await Student.find();
    return res.status(200).json({ allStudentDetails });
  } catch (err) {
    console.error("getAllStudents error:", err);
    return res.status(500).json({ message: "Server error while fetching students" });
  }
};

const getStudentBasedOnId = async (req, res) => {
  try {
    const studentdetails = await Student.findById(req.params.id);
    if (!studentdetails) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json({ studentdetails });
  } catch (err) {
    console.error("getStudentBasedOnId error:", err);
    return res.status(500).json({ message: "Server error while fetching student" });
  }
};

const deleteStudent = async (req, res) => {
  try {
    const deletedStudent = await Student.findByIdAndDelete(req.params.id);
    if (!deletedStudent) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json({ message: "Deleted the student", deletedStudent });
  } catch (err) {
    console.error("deleteStudent error:", err);
    return res.status(500).json({ message: "Server error while deleting student" });
  }
};

const updateStudent = async(req,res) =>{
  try{
    const updates = req.body;
    const updatedStudent = await Student.findByIdAndUpdate(req.params.id, updates, {
      new: true,            
      runValidators: true,  
      useFindAndModify: false
    });
    if (!updatedStudent) {
        return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({ message: "Student updated", student: updatedStudent });
  } catch (err) {
    console.error("updateStudent error:", err);
    return res.status(500).json({ message: "Server error while updating student" });
  }
}

module.exports = { addStudent, getAllStudents, getStudentBasedOnId, deleteStudent ,updateStudent};
