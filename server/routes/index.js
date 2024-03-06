import express from "express";
import locationRoutes from "./location.js";

const router = express.Router();

router.use(locationRoutes);

export default router;
