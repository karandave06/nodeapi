const express = require("express");
const fs = require("fs");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const cors = require("cors")
 
const server = express();
const mongoose = require("mongoose");
main().catch((err) => console.log(err));


async function main() {
  console.log("connecting in progress....");
  await mongoose.connect(
    "mongodb+srv://vvdave06:vvdave06@karan.ifak216.mongodb.net/"
  );
  console.log("connected suscessfully $$$");
}
const productRouter = require("./routes/products");


server.use(cors())
server.use(express.json());
server.use(express.static("public"));

server.use("/products", productRouter.router);

server.listen(3000, (req, res) => {
  console.log("server is running on port 3000");
});

server.get("/", (req, res) => {
  res.sendStatus(200);
});
