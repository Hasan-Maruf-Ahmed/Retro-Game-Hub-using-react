require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const scoreRoutes = require("./routes/scores");
const Score = require("./models/playerData");
// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/scores", scoreRoutes);

app.get('/getscores', (req, res) => {
    Score.find()
    .then(scores => res.json(scores))
    .catch(err => res.json(err));
})

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));