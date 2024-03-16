const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { connection } = require("../server/db/connection");
const router = require('../server/routes/routes')
require("dotenv").config();
const PORT = process.env.BASE_URL || 5000

connection();

app.use(express.json());
app.use(cors({ origin: "https://recipe-mernapp.vercel.app", credentials: true }));
app.use(cookieParser());

app.use("/api", router);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


