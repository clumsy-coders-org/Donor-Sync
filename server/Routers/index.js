import express from "express";
import authRoute from "./authRout.js";

const router = express.Router();

router.use(`/auth`, authRoute); //auth/register