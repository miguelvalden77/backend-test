const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

const authRoutes = require("./auth.routes")
router.use("/auth", authRoutes)

const testRoutes = require("./test.routes")
router.use("/test", testRoutes)

module.exports = router;
