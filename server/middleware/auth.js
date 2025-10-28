import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  try {
    let token = req.header("Authorization");   // use let, not const
    if (!token) return res.status(403).send("Access denied.");

    if (token.startsWith("Bearer ")) {
      token = token.slice(7, token.length).trimLeft();  // strip "Bearer "
    }

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    console.error("JWT verification failed:", error.message);
    res.status(400).send("Invalid token.");
  }
};
