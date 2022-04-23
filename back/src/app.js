const express = require("express");
const passport = require("passport");
const passportConfig = require("./passport");
const { userAuthRouter } = require("./routers/userRouter");
const { errorMiddleware } = require("./middlewares/errorMiddleware");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
    req.accepts("application/json");
    next();
});

// 기본 페이지 
app.get("/", (req, res) => {
    res.send("main page");
});

passportConfig();
app.use(passport.initialize());
app.use("/users", userAuthRouter);
app.use(errorMiddleware);

module.exports = { app };
