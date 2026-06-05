import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Webhook endpoint");
});

export default router;