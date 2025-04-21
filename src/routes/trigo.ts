import express from 'express'
import trigoHandler from "../handlers/trigo"

const router = express.Router();

router.get("/triangle", trigoHandler.getTriangle)
router.get("/rectangle", trigoHandler.getRectangle);
router.get("/cube", trigoHandler.getCube);

export default router;