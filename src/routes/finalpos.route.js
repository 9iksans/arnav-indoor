import express from 'express'
import { verify as requiresAuth } from '../config/jwt.config.js'
import * as finalPosController from '../controllers/finalpos.controller.js'
const router = express.Router()

router.get("/", requiresAuth, finalPosController.findAll)
router.get("/:id", requiresAuth, finalPosController.findOne)
router.post("/", requiresAuth, finalPosController.create)
router.put("/:id", requiresAuth, finalPosController.updateOne)
router.delete("/:id", requiresAuth, finalPosController.deleteOne)

export default router

