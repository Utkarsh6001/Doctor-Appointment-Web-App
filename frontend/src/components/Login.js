import { useState } from "react";
import axios from "axios";

function Login({ onSwitch }) {
  const [form, setForm] = useState({ email: "", password: "" });
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
      const res = await axios.post("http://localhost:5000/api/auth/login", form);
      localStorage.setItem("token", res.data.token);
      window.location.reload();
    } catch (error) {
      setError(error.response?.data?.message || "Login failed");
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
          display: "inline-flex", alignItems: "center", gap: "6px",
          background: "rgba(255,255,255,0.15)", borderRadius: "99px",
          padding: "6px 14px", fontSize: "12px", color: "white",
          marginBottom: "20px", width: "fit-content"
        }}>
          ✚ Trusted Healthcare Platform
        </div>

        <h1 style={{
          fontSize: "36px", fontWeight: "800", color: "white",
          lineHeight: "1.3", margin: "0 0 32px"
        }}>
          Your doctor is<br />one click away
        </h1>

        {[
          { icon: "🩺", title: "500+ Specialists", sub: "All verified doctors" },
          { icon: "⚡", title: "Instant Booking", sub: "No waiting in queues" },
          { icon: "🔒", title: "100% Secure", sub: "Your data is safe" },
          { icon: "💊", title: "All Specialities", sub: "Cardiologist to Dentist" },
        ].map((item) => (
          <div key={item.title} style={{
            display: "flex", alignItems: "center", gap: "14px",
            background: "rgba(255,255,255,0.10)", borderRadius: "12px",
            padding: "14px 16px", marginBottom: "10px"
          }}>
            <span style={{ fontSize: "24px" }}>{item.icon}</span>
            <div>
              <div style={{ color: "white", fontWeight: "700", fontSize: "14px" }}>
                {item.title}
              </div>
              <div style={{ color: "rgba(255,255,255,0.65)", fontSize: "12px" }}>
                {item.sub}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* RIGHT — Login Form */}
      <div style={{
        flex: 1, background: "white", padding: "48px 40px",
        display: "flex", flexDirection: "column", justifyContent: "center"
      }}>
        <div style={{ maxWidth: "380px", width: "100%" }}>

          <h2 style={{ fontSize: "28px", fontWeight: "800", color: "#111827", margin: "0 0 4px" }}>
            Welcome Back 👋
          </h2>
          <p style={{ fontSize: "13px", color: "#6b7280", margin: "0 0 28px" }}>
            Login to your DocBook account
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

          <form onSubmit={handleSubmit}>

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
                boxSizing: "border-box", marginBottom: "16px", color: "#111827"
              }}
            />

            <label style={{ fontSize: "12px", fontWeight: "600", color: "#374151", display: "block", marginBottom: "6px" }}>
              Password
            </label>
            <input
              name="password"
              type="password"
              placeholder="••••••••"
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
              {loading ? "Logging in..." : "Login to DocBook →"}
            </button>

          </form>

          <p style={{ textAlign: "center", fontSize: "13px", color: "#6b7280", marginTop: "24px" }}>
            Don't have an account?{" "}
            <span
              onClick={onSwitch}
              style={{ color: "#2563eb", fontWeight: "700", cursor: "pointer" }}
            >
              Register free
            </span>
          </p>

        </div>
      </div>
    </div>
  );
}

export default Login;