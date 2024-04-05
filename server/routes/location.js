import express from "express";
import * as controller from "../controllers/api_controller.js";

const router = express.Router();

router.get("/", (req, res) => res.send("Home Route"));
router.post("/location", controller.mostPopularRestaurants);
router.post("/location/nextPage", controller.nextPage);
router.get("/popular-restaurants", controller.fetchPopularRestaurants);

export default router;
