import express from "express";
import * as diaryServices from '../services/diaryServices'

const router = express.Router();

router.get("/", (_req, res) => {
  res.send(diaryServices.getEntriesWithoutSenssitiveInfo());
});

router.get("/:id", (req, res) => {
  const diary = diaryServices.findById(+req.params.id) //el "+" trasforma el string a numero (unary operator: plus)
  res.send(diary);
});

router.post("/", (_req, res) => {
  res.send("Saving a diary!");
});

export default router;
