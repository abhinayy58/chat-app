import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import genrateToken from "../utils/genrateToken.js";
async function signup(req, res) {
  try {
    const { username, fullname, email, password, confirmPassword, gender } =
      req.body;
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Password don't match" });
    }
    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ error: "User already exists" });
    }

    // Hash Password here
    const salt = 10;
    const genSalt = await bcrypt.genSalt(salt);
    const hashedPassword = await bcrypt.hash(password, salt);

    // https://avatar-placeholder.iran.liara.run/

    let boyImageUrl = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    let girlImageUrl = `https://avatar.iran.liara.run/public/public/girl?username=${username}`;

    const newUser = await User({
      username,
      fullname,
      email,
      password: hashedPassword,
      gender,
      profilePic: gender === "male" ? boyImageUrl : girlImageUrl,
    });

    if (newUser) {
      genrateToken(newUser._id, res);
      await newUser.save();

      return res.status(201).json({
        _id: newUser._id,
        username: newUser.username,
        profilePic: newUser.profilePic,
        gender: newUser.gender,
        fullname: newUser.fullname,
        email: newUser.email,
      });
    } else {
      return res.status(400).json({ error: "Invalid user data" });
    }
  } catch (error) {
    console.log("Error in signup", error.message);
    return res.status(500).json({ error: "Internal server error" });
  }
}
async function signin(req, res) {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    const isCorrectPassword = await bcrypt.compare(
      password,
      user?.password || ""
    );
    if (!user || !isCorrectPassword) {
      return res.status(400).json({ error: "Invalid username or password" });
    }

    genrateToken(user._id, res);
 
    return res.status(201).json({
      _id: user._id,
      username: user.username,
      profilePic: user.profilePic,
      fullname: user.fullname,
      email: user.email,
      gender: user.gender
    });
  } catch (error) {
    console.log("Error in signin", error.message);
    return res.status(500).json({ error: "Internal server error" });
  }
}
async function logout(req, res) {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    return res.status(201).json({ message: "Logged Out successfully" });
  } catch (error) {
    console.log("Error in signin", error.message);
    return res.status(500).json({ error: "Internal server error" });
  }
}

export default { signup, signin, logout };
