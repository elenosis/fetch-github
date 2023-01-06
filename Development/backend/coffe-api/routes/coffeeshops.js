import express from "express";
import {
  addCoffeeshop,
  deleteCoffeeshop,
  updateCoffeeshop,
  getCoffeeshop,
} from "../controllers/coffeeshopsController.js";

const router = express.Router();
router.route("/").get(getCoffeeshop).post(addCoffeeshop);
router.route("/:id").patch(updateCoffeeshop).delete(deleteCoffeeshop);

export default router;
