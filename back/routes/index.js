const express = require("express");
const router = express.Router();
const path = require('path');

const {
    getProducts,
} = require("../controlers/products");

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/front/build/index.html'));
  });

router.get("/products", function (req, res, next) {
    const data = getProducts();
    res.json({
        data
    })
});

router.post("/sendcart", function (req, res, next) {
    console.log("new delivery", req.body);
    res.json({
        message: "Успешно отправлено!"
    })
});

module.exports = router;