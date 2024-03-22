const User = require("../db/db");

async function userSignup (req, res)  {
    try {
      const { firstName, lastName, email, contact, password } = req.body;
  
      const newUser = new User({ firstName, lastName, email, contact, password });
  
      await newUser.save();
  
      res.status(201).json({ message: 'User signed up successfully' });
    } catch (error) {
      console.error('Error signing up user:', error);
      res.status(500).json({ message: 'Internal server error' });
    }

}

module.exports=userSignup;