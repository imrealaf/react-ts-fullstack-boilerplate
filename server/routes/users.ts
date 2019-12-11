import { Router } from "express";

import * as userController from "../controllers/users.controller";

const router: Router = Router();

router.get("/", userController.doTest);

export default router;
