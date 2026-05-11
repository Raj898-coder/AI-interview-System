import genToken from "../config/token.js";
import User from "../models/user.model.js";

export const googleAuth = async (req, res) => {
  try {

    const { name, email } = req.body;

    let user = await User.findOne({ email });

    // Create User
    if (!user) {
      user = await User.create({
        name,
        email,
      });
    }

    // Generate Token
    let token = await genToken(user._id);

    // Set Cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "None",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({
      success: true,
      user,
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: `Google auth error ${error.message}`,
    });

  }
};

export const logOut = async (req, res) => {
  try {

    res.clearCookie("token", {
      httpOnly: true,
      secure: true,
      sameSite: "None",
    });

    return res.status(200).json({
      success: true,
      message: "Logout Successfully",
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: `Logout error ${error.message}`,
    });

  }
};
