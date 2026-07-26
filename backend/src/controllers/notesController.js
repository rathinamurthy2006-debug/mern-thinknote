import Note from "../models/Note.js";
export async function getAllNotes(req, res) {
  try {
    const notes = await Note.find().sort({createdAt:-1});
    res.status(200).json(notes);
  } catch (e) {
    console.error("Error in getAllNotes controller", e);
    res.status(500).json({ msg: "Internal server error" });
  }
}

export async function getANotebyid(req, res) {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) returnres.status(404).json({ msg: "Note is not Found" });
    res.status(200).json(note);
  } catch (e) {
    console.error("Error getANotebyid in  controller", e);
    res.status(500).json({ msg: "Internal server error" });
  }
}

export async function createANotes(req, res) {
  try {
    const { title, content } = req.body;
    const note = new Note({ title, content });
    const savenote = await note.save();
    res.status(201).json(savenote);
  } catch (e) {
    console.error("Error in createAnote controller", e);
    res.status(500).json({ msg: "Internal server error" });
  }
}

export async function UpdateANotes(req, res) {
  try {
    const { title, content } = req.body;
    const updateANotes = await Note.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true },
    );
    if (!updateANotes)
      return res.status(404).json({ msg: "Note Is Not found" });
    res.status(200).json(updateANotes);
  } catch (e) {
    console.error("Error in updateAnote controller", e);
    res.status(500).json({ msg: "Internal server error" });
  }
}

export async function DeleteNotes(req, res) {
  try {
    const deleteNotes = await Note.findByIdAndDelete(req.params.id);
    if (!deleteNotes) return res.status(404).json({ msg: "Note Is Not Found" });
    res.status(200).json({ msg: "Note is delete successfully" });
  } catch (e) {
    console.error("Error in deleteAnote controller", e);
    res.status(500).json({ msg: "Internal server error" });
  }
}
