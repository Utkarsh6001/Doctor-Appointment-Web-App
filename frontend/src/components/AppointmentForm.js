import React, { useState } from "react";
import axios from "axios";

function AppointmentForm() {
  const [form, setForm] = useState({
    name: "",
    doctor: "",
    date: "",
    time: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/appointments", form);
    alert("Appointment Booked");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="doctor" placeholder="Doctor" onChange={handleChange} />
      <input name="date" type="date" onChange={handleChange} />
      <input name="time" type="time" onChange={handleChange} />
      <button type="submit">Book</button>
    </form>
  );
}

export default AppointmentForm;