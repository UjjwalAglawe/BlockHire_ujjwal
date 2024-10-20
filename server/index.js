const express = require("express");
require('dotenv').config();
const cookieParser = require("cookie-parser")

const app = express();
app.use(express.json());
app.use(cookieParser())

const dbConnect = require('./config/database');
dbConnect();

const cors = require('cors');
app.use(cors());

app.use((error, req, res, next) => {
    const statusCode = error.statusCode || 500;
    const message = error.message || 'Internal Server Error';
    return res.status(statusCode).json({
      success: false,
      statusCode,
      message,
    });
});

const authRoute = require('./routes/auth.route');

app.use("/auth", authRoute)

app.listen(4000, ()=>{
    console.log("Listening to 4000!")
})