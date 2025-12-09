const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const secretKey = "4c3b70058fa5d9adea2683707b818611efca33366f5985d3";
app.use(express.json());
const employees = [
    { id: 1, name: "Naveen", role: "Developer", salary: 35000, address: "Chennai" },
    { id: 2, name: "Arun", role: "Tester", salary: 28000, address: "Coimbatore" },
    { id: 3, name: "Kavi", role: "Manager", salary: 55000, address: "Salem" },
    { id: 4, name: "Priya", role: "Designer", salary: 30000, address: "Madurai" },
    { id: 5, name: "Vishnu", role: "HR", salary: 25000, address: "Trichy" }
];

app.get("/getUser", (req, res) => {
    // const id=parseInt(req.params.id);
    res.json(employees);

});

app.get("/getUser/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const user = employees.find(emp => emp.id === id);
    if (user) {
        res.json(user);
        return;
    }
    else {
        res.status(404).json({ message: "User not found" });
        return;
    }
});

app.post("/addUser", (req, res) => {
    const newemployee = req.body;
    employees.push(newemployee);
    res.json({
        message: "new enmployee added",
        data: newemployee
    });

})

//Delete user based on ID
app.delete("/deleteUser/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = employees.findIndex(emp => emp.id === id);
    if (index !== -1) {
        const deletedUser = employees.splice(index, 1);
        res.json({
            message: "User deleted successfully",
            data: deletedUser
        });
    }
    else {
        res.status(404).json({ message: "User not found" });
        return;
    }
});

app.get("/login", (req, res) => {
    const claims = {
        id: 1,
        name: "Naveen",
        role: "Developer"
    };

    const token = jwt.sign(claims, secretKey, { expiresIn: "50s" });

    res.status(201).json({
        message: "Login successful",
        token: token
    });
});

app.get("/profile", (req, res) => {
    const token = req.headers["Authorization"];
    const verified = jwt.verify(token, secretKey)
    if (verified instanceof jwt.TokenExpiredError) {
        res.status(401).json({ message: "Token expired" });
    }
    else if (verified instanceof jwt.JsonWebTokenError) {
        res.status(401).json({ message: "Invalid token" });
    }
    res.status(202).json({
        message: "User Login successful",
        data: verified
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});