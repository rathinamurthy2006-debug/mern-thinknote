import express from "express";
import {
  getAllNotes,
  createANotes,
  UpdateANotes,
  DeleteNotes,
  getANotebyid
} from "../controllers/notesController.js";

const router = express.Router();

router.get("/", getAllNotes);

router.get("/:id",getANotebyid)

router.post("/", createANotes);

router.put("/:id", UpdateANotes);

router.delete("/:id", DeleteNotes);

export default router;
