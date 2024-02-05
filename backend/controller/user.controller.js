import User from "../models/user.model.js";

/**
 * Retrieves user details
 * 
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 */
async function getUserDetail(req, res) {
    // Add functionality here to retrieve user details
    try{
    const userLoggedIn = req.user._id;

    const user = await User.find({_id:{$ne:userLoggedIn}}).select("-password");

    res.status(200).json(user);
	} catch (error) {
		console.error("Error in getUserDetail: ", error.message);
		res.status(500).json({ error: "Internal server error" });
	}
  }

  export default getUserDetail
