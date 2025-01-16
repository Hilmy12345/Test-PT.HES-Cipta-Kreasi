const express = require("express");
const mahasiswaCtrl = require("../controller/mahasiswa-Ctrl");
const router = express.Router();

router.get("/mahasiswa", mahasiswaCtrl.showAllMahasiswa);
router.get("/detail/mahasiswa/:npm", mahasiswaCtrl.showDetailMahasiswa);
router.post("/create/mahasiswa", mahasiswaCtrl.createMahasiswa);
router.put("/update/mahasiswa/:npm", mahasiswaCtrl.editFullMahasiswa);
router.delete("/delete/mahasiswa/:npm", mahasiswaCtrl.removeMahasiswa);
module.exports = router;
