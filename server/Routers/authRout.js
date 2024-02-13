

// import express from "express";
// import { user_login, user_signup } from "../Control/authContro.js";

// const router = express.Router();

// router.post("/signup", user_signup);
// router.post("/login", user_login);


// export default router;

import express from "express";
import { login, register } from "../Control/authContro.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);


export default router;