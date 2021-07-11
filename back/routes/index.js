const express = require("express");
const router = express.Router();

const {
    getProducts,
} = require("../controlers/products");

router.get("/", function (req, res, next) {
    res.send("Hello, World!");
});

router.get("/products", async function (req, res, next) {
    const data = await getProducts();
    res.json({
        data
    })
});

router.post("/sendcart", async function (req, res, next) {
    console.log("new delivery", req.body);
    res.json({
        message: "Успешно отправлено!"
    })
});

module.exports = router;