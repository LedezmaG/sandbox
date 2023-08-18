const { Router } = require("express");
const { check } = require("express-validator");
const { JwtVerify } = require("../helpers/jwtVerify");
const { fileValidator } = require("../helpers/fileValidator");
const { Create, GetAll, GetById } = require("../controllers/FileController");
const multer = require("multer");

const router = Router();

// router.use(JwtVerify);

const storage = multer.memoryStorage(); // Almacenará el archivo en memoria
const upload = multer({ storage });

router.get(
  "/",
  GetAll
);
router.get(
  "/:id",
  [
    check("id", "Invalid value").isInt(),
    fileValidator,
  ],
  GetById
);

router.post(
  "/",
  upload.single('file'),
  Create
);

module.exports = router;
