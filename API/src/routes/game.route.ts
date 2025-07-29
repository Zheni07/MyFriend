import express, { RequestHandler } from "express";
import { withValidationHandler } from "./validation/withValidationHandler";
import { updateScore } from "../controllers/game.controller";
const router = express.Router();

router.put("/update-score", updateScore)

export default router;