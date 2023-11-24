const express = require("express");
let router = express.Router();

const Productcontroler = require("../controller/Product");

router
  .post("/", Productcontroler.createProduct)
  .get("/", Productcontroler.getAllProducts)
  .get("/:id", Productcontroler.getProducts)
  .put("/:id", Productcontroler.updateProduct)
  .patch("/:id", Productcontroler.patchProducts)
  .delete("/:id", Productcontroler.delateProduct);


 exports.router = router