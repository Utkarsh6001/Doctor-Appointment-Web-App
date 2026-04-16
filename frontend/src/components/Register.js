import { useState } from "react";
import axios from "axios";

function Register({ onSwitch }) {
  const [form, setForm] = useState({ name: "", email: "", password: "", role: "patient" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", form);
      localStorage.setItem("token", res.data.token);
      window.location.reload();
    } catch (error) {
      setError(error.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>

      {/* LEFT — Blue Hero */}
      <div style={{
        flex: 1, background: "#2563eb", padding: "48px 40px",
        display: "flex", flexDirection: "column", justifyContent: "center"
      }}>
        <div style={{
          display: "inline-flex", alignItems: "center",
          background: "rgba(255,255,255,0.15)", borderRadius: "99px",
          padding: "6px 14px", fontSize: "12px", color: "white",
          marginBottom: "20px", width: "fit-content"
        }}>
          ✚ Join 50,000+ Patients
        </div>

        <h1 style={{
          fontSize: "36px", fontWeight: "800", color: "white",
          lineHeight: "1.3", margin: "0 0 16px"
        }}>
          Start your health<br />journey today
        </h1>

        <p style={{
          color: "rgba(255,255,255,0.75)", fontSize: "14px",
          marginBottom: "28px", lineHeight: "1.7"
        }}>
          Book appointments, consult doctors online, and manage your health — all in one place.
        </p>

        {[
          { icon: "✅", text: "Free account — no credit card needed" },
          { icon: "✅", text: "Book appointments in under 60 seconds" },
          { icon: "✅", text: "Cancel anytime for free" },
          { icon: "✅", text: "Doctors available 24/7 online" },
        ].map((item) => (
          <div key={item.text} style={{
            display: "flex", alignItems: "center",
            gap: "10px", marginBottom: "12px"
          }}>
            <span style={{ fontSize: "16px" }}>{item.icon}</span>
            <span style={{ color: "rgba(255,255,255,0.9)", fontSize: "13px" }}>
              {item.text}
            </span>
          </div>
        ))}

        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "24px" }}>
          {["Cardiologist", "Dermatologist", "Neurologist", "Pediatrician", "Orthopedic"].map(s => (
            <span key={s} style={{
              background: "rgba(255,255,255,0.15)", color: "white",
              fontSize: "11px", padding: "4px 10px", borderRadius: "99px"
            }}>
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* RIGHT — Register Form */}
      <div style={{
        flex: 1, background: "white", padding: "48px 40px",
        display: "flex", flexDirection: "column", justifyContent: "center"
      }}>
        <div style={{ maxWidth: "380px", width: "100%" }}>

          <h2 style={{ fontSize: "28px", fontWeight: "800", color: "#111827", margin: "0 0 4px" }}>
            Create Account 🎉
          </h2>
          <p style={{ fontSize: "13px", color: "#6b7280", margin: "0 0 20px" }}>
            Join DocBook for free today
          </p>

          {error && (
            <div style={{
              background: "#fef2f2", color: "#dc2626", padding: "12px 16px",
              borderRadius: "8px", fontSize: "13px", marginBottom: "16px",
              border: "1px solid #fecaca"
            }}>
              ❌ {error}
            </div>
          )}

          {/* Role Selector */}
          <p style={{ fontSize: "12px", fontWeight: "600", color: "#374151", marginBottom: "8px" }}>
            I am a...
          </p>
          <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
            {[
              { value: "patient", label: "👤 Patient" },
              { value: "doctor", label: "🩺 Doctor" },
            ].map((r) => (
              <button
                key={r.value}
                type="button"
                onClick={() => setForm({ ...form, role: r.value })}
                style={{
                  flex: 1, padding: "10px",
                  border: "1.5px solid",
                  borderColor: form.role === r.value ? "#2563eb" : "#e5e7eb",
                  borderRadius: "10px", fontSize: "13px", fontWeight: "600",
                  cursor: "pointer",
                  background: form.role === r.value ? "#eff6ff" : "white",
                  color: form.role === r.value ? "#2563eb" : "#374151",
                }}
              >
                {r.label}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit}>

            <label style={{ fontSize: "12px", fontWeight: "600", color: "#374151", display: "block", marginBottom: "6px" }}>
              Full Name
            </label>
            <input
              name="name"
              placeholder="Rahul Sharma"
              onChange={handleChange}
              required
              style={{
                width: "100%", padding: "12px 14px",
                border: "1.5px solid #e5e7eb", borderRadius: "10px",
                fontSize: "14px", background: "#f8faff",
                boxSizing: "border-box", marginBottom: "14px", color: "#111827"
              }}
            />

            <label style={{ fontSize: "12px", fontWeight: "600", color: "#374151", display: "block", marginBottom: "6px" }}>
              Email Address
            </label>
            <input
              name="email"
              type="email"
              placeholder="rahul@email.com"
              onChange={handleChange}
              required
              style={{
                width: "100%", padding: "12px 14px",
                border: "1.5px solid #e5e7eb", borderRadius: "10px",
                fontSize: "14px", background: "#f8faff",
                boxSizing: "border-box", marginBottom: "14px", color: "#111827"
              }}
            />

            <label style={{ fontSize: "12px", fontWeight: "600", color: "#374151", display: "block", marginBottom: "6px" }}>
              Password
            </label>
            <input
              name="password"
              type="password"
              placeholder="Min 6 characters"
              onChange={handleChange}
              required
              style={{
                width: "100%", padding: "12px 14px",
                border: "1.5px solid #e5e7eb", borderRadius: "10px",
                fontSize: "14px", background: "#f8faff",
                boxSizing: "border-box", marginBottom: "24px", color: "#111827"
              }}
            />

            <button
              type="submit"
              disabled={loading}
              style={{
                width: "100%", padding: "13px",
                background: loading ? "#93c5fd" : "#2563eb",
                color: "white", border: "none", borderRadius: "10px",
                fontSize: "15px", fontWeight: "700", cursor: "pointer"
              }}
            >
              {loading ? "Creating account..." : "Create Free Account →"}
            </button>

          </form>

          <p style={{ textAlign: "center", fontSize: "13px", color: "#6b7280", marginTop: "24px" }}>
            Already have an account?{" "}
            <span
              onClick={onSwitch}
              style={{ color: "#2563eb", fontWeight: "700", cursor: "pointer" }}
            >
              Login here
            </span>
          </p>

        </div>
      </div>
    </div>
  );
}

export default Register;