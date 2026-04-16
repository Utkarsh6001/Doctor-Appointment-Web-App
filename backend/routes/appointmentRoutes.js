const express = require("express");
const router = express.Router();
const Appointment = require("../models/Appointment");

// Create appointment
router.post("/", async(req, res) => {
    try {
        const newData = new Appointment(req.body);
        await newData.save();
        res.json(newData);
    } catch (error) {
        console.log(error); // IMPORTANT
        res.status(500).json({ error: "Server Error" });
    }
});

// Get all appointments
router.get("/", async(req, res) => {
    try {
        const data = await Appointment.find();
        res.json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Server Error" });
    }
});

module.exports = router;