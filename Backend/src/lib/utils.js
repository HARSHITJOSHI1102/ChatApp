import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  console.log("Generated Token: ", token);

  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    httpOnly: true, // Prevents client-side access for security
    sameSite: "Lax", // Allows sending cookies across sites (fixes potential issues)
    secure: process.env.NODE_ENV === "production", // ✅ Only secure in production
  });

  return token;
};



// this makes it login till 7 days and then the session expires