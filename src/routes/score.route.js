import express from 'express'
import { verify as requiresAuth } from '../config/jwt.config.js'
import * as scoreController from '../controllers/score.controller.js'
const router = express.Router()

router.get("/get-all", requiresAuth, scoreController.findAll)
router.get("/get-accumulate", requiresAuth, scoreController.findAccumulate)
router.get("/:id", requiresAuth, scoreController.findOne)
router.post("/", requiresAuth, scoreController.create)
router.put("/:id", requiresAuth, scoreController.updateOne)
router.delete("/:id", requiresAuth, scoreController.deleteOne)

export default router

