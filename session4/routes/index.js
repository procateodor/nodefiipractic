const router = require("express").Router();
const multer = require("multer");

const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: "teodorproca",
  api_key: "986867992537783",
  api_secret: "A0IYwVO7UYvuyXjQqbLq1Hot0yc",
});

const upload = multer({
  storage: multer.memoryStorage(),
});

const auth = require("./auth");
const product = require("./product");
const cart = require("./cart");

router.use("/auth", auth);

const { requireAuth } = require("../middlewares");

router.use(requireAuth);

router.post("/file", upload.single("avatar"), (req, res) => {
  console.log(req.file);

  const fs = require("fs");

  fs.writeFileSync(`${req.file.originalname}`, req.file.buffer);

  // cloudinary.uploader.upload(`${req.file.path}`, (error, response) => {
  //   if (error) {
  //     console.log(error);
  //   }

  //   console.log(response);
  // });
});

router.use("/products", product);
router.use("/carts", cart);

module.exports = router;
