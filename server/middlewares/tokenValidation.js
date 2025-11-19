import jwt from "jsonwebtoken";

const tokenValidation = (req, res, next) => {
  let token = req.headers.authorization;
  if (!token) return res.status(401).json({ error: "Authorization missing" });

  if (token.startsWith("Bearer ")) token = token.split(" ")[1];

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = payload; // attach user info to request
    next();
  } catch (err) {
    return res.status(401).json({ error: "Invalid or expired token" });
  }
};

export default tokenValidation;
