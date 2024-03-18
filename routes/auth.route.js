import express from "express";
import {
  google,
  makeAdmin,
  signOut,
  signin,
  signup,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/google", google);
router.get("/signout", signOut);
router.post("/make-admin/:id", makeAdmin);

export default router;
