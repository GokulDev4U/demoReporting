
import { Router } from "express";
import * as ReportingController from "../controller/ReportingController.js";

const router = Router();

router.post("/", ReportingController.create);
router.patch("/:id", ReportingController.update);

export default router;