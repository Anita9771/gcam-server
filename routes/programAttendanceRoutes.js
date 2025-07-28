const router = require("express").Router();
const controller = require("../controllers/programAttendanceController");

router.post("/", controller.submitAttendance);
router.get("/", controller.getAttendance);

module.exports = router;
