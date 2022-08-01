import express from "express";
const router = express.Router();
import {
  getDesserts,
  getDessertById,
  deleteDessert,
  createDessert,
  updateDessert,
} from "../controllers/dessertController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").get(getDesserts).post(protect, admin, createDessert);
router
  .route("/:id")
  .get(getDessertById)
  .delete(protect, admin, deleteDessert)
  .put(protect, admin, updateDessert);


export default router;
