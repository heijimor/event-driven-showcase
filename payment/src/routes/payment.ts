const express = require("express");
const router = express.Router();

router.get("/", (req: any, res: any) => {
  res.json([{ id: 0 }]);
});

export default router;
