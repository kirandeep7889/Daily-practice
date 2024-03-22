User
const User = require("../db/db");

 async function UserLogin(req,res) {
    try {
        const { email } = req.body;
    
        const existingUser = await User.findOne({ email });
        if (!existingUser) {
          return res.status(404).json({ message: "User not found" });
        }
    
        res.status(200).json({ message: "User found" });
      } catch (error) {
        console.error("Error in user login:", error);
        res.status(500).json({ message: "Internal server error" });
      }
    
}

module.exports=UserLogin;