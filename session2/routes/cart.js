const router = require("express").Router();
const { cartController } = require("../controllers");

router.post("/", cartController.createCart);
router.get("/:cartId", cartController.getCart);
router.get("/", cartController.getAllCarts);
router.patch("/:cartId", cartController.updateCart);
router.delete("/:cartId", cartController.deleteCart);

module.exports = router;
