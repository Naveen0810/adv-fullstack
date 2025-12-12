const express = require('express');
const router = express.Router();
const{addStudent,getAllStudents,getStudentBasedOnId,deleteStudent}=require("../controller/studentController");

router.post("/addStudent",addStudent);
router.get("/getAllStudents",getAllStudents);
router.get("/getStudents/:id",getStudentBasedOnId);
router.delete("/deleteStudent/:id",deleteStudent);

module.exports = router;