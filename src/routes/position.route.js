import express from 'express'
import { verify as requiresAuth } from '../config/jwt.config.js'
import * as positionController from '../controllers/position.controller.js'
const router = express.Router()

router.get("/", requiresAuth, positionController.findAll)
router.get("/me", requiresAuth, positionController.findMe)
router.get("/:id", requiresAuth, positionController.findOne)
router.post("/", requiresAuth, positionController.create)
router.put("/:id", requiresAuth, positionController.updateOne)
router.delete("/:id", requiresAuth, positionController.deleteOne)

export default router

