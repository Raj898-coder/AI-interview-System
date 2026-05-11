import jwt from "jsonwebtoken";

const isAuth = async (req, res, next) => {
  try {

    // Cookie Token
    let token = req.cookies.token;

    // Authorization Header Token Support
    if (!token && req.headers.authorization) {
      token = req.headers.authorization.split(" ")[1];
    }

    // No Token
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "No token found",
      });
    }

    // Verify Token
    const verifyToken = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    // Invalid Token
    if (!verifyToken) {
      return res.status(401).json({
        success: false,
        message: "Invalid token",
      });
    }

    // Save User Id
    req.userId = verifyToken.userId;

    next();

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: `Auth Middleware Error: ${error.message}`,
    });

  }
};

export default isAuth;
