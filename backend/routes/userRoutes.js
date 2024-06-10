const express=require('express');
const  {registerUser,authUser,allUsers}=require("../controllers/userControllers.js")
const router=express.Router();
const {protect} = require("../middleware/authMiddleware.js");

router.route("/").post(registerUser).get(protect,allUsers);
router.post('/login',authUser);

module.exports=router;
