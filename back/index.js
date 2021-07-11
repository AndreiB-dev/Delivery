const express = require("express");
const { createServer } = require("http");
const path = require('path');

const PORT = process.env.PORT || 3003;

const indexRouter = require("./routes/index");

const app = express();
const http = createServer(app);

//cors
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Methods",
        "GET, OPTIONS, PUT, PATCH, POST, DELETE",
    );
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, Content-Type, Accept, Authorization, token",
    );
    next();
});

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'front/build')));

app.use("/", indexRouter);

http.listen(PORT, function () {
    console.log(`Server: http://localhost:${PORT}`);
  });