const jwt = require("jsonwebtoken");
const JWT_SECRET = "doctor_app_secret_123";

const protect = (req, res, next) => {
    const token = req.headers.authorization ? req.headers.authorization.split(" ")[1] : null;
    if (!token) return res.status(401).json({ message: "No token, unauthorized" });

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.userId = decoded.id;
        req.userRole = decoded.role;
        next();
    } catch {
        res.status(401).json({ message: "Invalid token" });
    }
};

module.exports = { protect };