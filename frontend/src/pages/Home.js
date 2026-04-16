import { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  const [form, setForm] = useState({ name: "", doctor: "", date: "", time: "" });
  const [appointments, setAppointments] = useState([]);
  const [message, setMessage] = useState("");
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(null);
  const doctors = [
    "Dr. Sharma - Cardiologist",
    "Dr. Gupta - Dermatologist",
    "Dr. Verma - Neurologist",
    "Dr. Singh - Pediatrician",
    "Dr. Mehta - Orthopedic",
  ];

  const fetchAppointments = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/appointments");
      setAppointments(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
  const fetchUser = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/auth/me", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token")
        }
      });
      setUser(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  fetchUser();
  fetchAppointments();
}, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/appointments", form);
      setMessage("Appointment Booked Successfully!");
      setForm({ name: "", doctor: "", date: "", time: "" });
      fetchAppointments();
      setTimeout(() => setMessage(""), 3000);
    } catch (err) {
      setMessage("Something went wrong!");
    }
  };

  const handleCancel = async (id) => {
    try {
      await axios.delete("http://localhost:5000/api/appointments/" + id);
      fetchAppointments();
    } catch (err) {
      console.log(err);
    }
  };
  const handleLogout = () => {
  localStorage.removeItem("token");
  window.location.href = "/login";
};

  return (
    <div style={{ fontFamily: "Segoe UI, sans-serif", minHeight: "100vh", background: "#f0f4ff" }}>

      <div style={{ background: "#2563eb", color: "white", padding: "16px 32px", display: "flex", alignItems: "center", gap: "12px" }}>
        <span style={{ fontSize: "28px" }}>🏥</span>
        <h1 style={{ margin: 0, fontSize: "22px", fontWeight: "600" }}>DocBook</h1>
        <button 
        onClick={handleLogout} 
        style={{ marginLeft: "auto", background: "white", color: "#2563eb", border: "none", padding: "6px 12px", borderRadius: "6px" }}>
            Logout
            </button>
      </div>
      {!token ? (
  <div style={{ maxWidth: "400px", margin: "40px auto" }}>
    <Register />
    <hr />
    <Login />
  </div>
) : (
      <div style={{ maxWidth: "900px", margin: "32px auto", padding: "0 16px" }}>

        <div style={{ background: "white", borderRadius: "16px", padding: "28px", boxShadow: "0 2px 12px rgba(0,0,0,0.08)", marginBottom: "28px" }}>
          <h2 style={{ margin: "0 0 20px", color: "#1e3a8a" }}>Book an Appointment</h2>

          {message && (
            <div style={{ padding: "12px", borderRadius: "8px", marginBottom: "16px", background: "#f0fdf4", color: "#166534", border: "1px solid #bbf7d0" }}>
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}>

              <div>
                <label style={{ display: "block", fontSize: "13px", color: "#6b7280", marginBottom: "6px" }}>Patient Name</label>
                <input
                  name="name"
                  placeholder="Enter your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  style={{ width: "100%", padding: "10px 14px", borderRadius: "8px", border: "1px solid #e5e7eb", fontSize: "14px", boxSizing: "border-box" }}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "13px", color: "#6b7280", marginBottom: "6px" }}>Select Doctor</label>
                <select
                  name="doctor"
                  value={form.doctor}
                  onChange={handleChange}
                  required
                  style={{ width: "100%", padding: "10px 14px", borderRadius: "8px", border: "1px solid #e5e7eb", fontSize: "14px", boxSizing: "border-box" }}
                >
                  <option value="">Choose a doctor...</option>
                  {doctors.map((d) => (
                    <option key={d} value={d}>{d}</option>
                  ))}
                </select>
              </div>

              <div>
                <label style={{ display: "block", fontSize: "13px", color: "#6b7280", marginBottom: "6px" }}>Date</label>
                <input
                  name="date"
                  type="date"
                  value={form.date}
                  onChange={handleChange}
                  required
                  style={{ width: "100%", padding: "10px 14px", borderRadius: "8px", border: "1px solid #e5e7eb", fontSize: "14px", boxSizing: "border-box" }}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "13px", color: "#6b7280", marginBottom: "6px" }}>Time</label>
                <input
                  name="time"
                  type="time"
                  value={form.time}
                  onChange={handleChange}
                  required
                  style={{ width: "100%", padding: "10px 14px", borderRadius: "8px", border: "1px solid #e5e7eb", fontSize: "14px", boxSizing: "border-box" }}
                />
              </div>

            </div>
            <button
              type="submit"
              style={{ background: "#2563eb", color: "white", border: "none", padding: "12px 28px", borderRadius: "8px", fontSize: "15px", fontWeight: "600", cursor: "pointer", width: "100%" }}
            >
              Book Appointment
            </button>
          </form>
        </div>

        <div style={{ background: "white", borderRadius: "16px", padding: "28px", boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }}>
          <h2 style={{ margin: "0 0 20px", color: "#1e3a8a" }}>My Appointments ({appointments.length})</h2>

          {appointments.length === 0 ? (
            <div style={{ textAlign: "center", padding: "40px", color: "#9ca3af" }}>
              <div style={{ fontSize: "48px", marginBottom: "12px" }}>📭</div>
              <p>No appointments booked yet</p>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {appointments.map((appt) => (
                <div key={appt._id} style={{ border: "1px solid #e5e7eb", borderRadius: "12px", padding: "16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                    <div style={{ width: "44px", height: "44px", borderRadius: "50%", background: "#eff6ff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px" }}>👨‍⚕️</div>
                    <div>
                      <p style={{ margin: 0, fontWeight: "600", color: "#111827" }}>{appt.name}</p>
                      <p style={{ margin: "2px 0", fontSize: "13px", color: "#2563eb" }}>{appt.doctor}</p>
                      <p style={{ margin: 0, fontSize: "12px", color: "#6b7280" }}>Date: {appt.date} | Time: {appt.time}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCancel(appt._id)}
                    style={{ background: "#fef2f2", color: "#dc2626", border: "1px solid #fecaca", padding: "6px 14px", borderRadius: "8px", cursor: "pointer", fontSize: "13px" }}
                  >
                    Cancel
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    )} 
    </div>

    
    
  );
}

export default Home;