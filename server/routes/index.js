
import { Router } from "express";
import ReportingApi from "./ReportingApi.js";

const router = Router();

router.use("/reporting", ReportingApi);

export default router;