import express from "express";
import { getUser, postUser, updateUser,deleteUser } from "./controller.js";

const router = express.Router();

router.get("/users", getUser);
router.post("/users", postUser);
router.patch("/users/:id", updateUser);
router.delete("/users/:id",deleteUser)

export default router;
