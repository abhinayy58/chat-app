import jwt from "jsonwebtoken";

const genrateToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });

  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days
    httpOnly: true, // prevent XSS attack cross-site scripting attack
    sameSite: "strict", // prevent CSRF attack Cross-Site Request Forgery (CSRF) 
    secure: process.env.NODE_ENV !== "development",
  });
};

export default genrateToken;
