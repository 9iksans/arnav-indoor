import express from 'express'
import { verify as requiresAuth } from '../config/jwt.config.js'
import * as initPosController from '../controllers/initpos.controller.js'
const router = express.Router()

router.get("/", requiresAuth, initPosController.findAll)
router.get("/:id", requiresAuth, initPosController.findOne)
router.post("/", requiresAuth, initPosController.create)
router.put("/:id", requiresAuth, initPosController.updateOne)
router.delete("/:id", requiresAuth, initPosController.deleteOne)

export default router

