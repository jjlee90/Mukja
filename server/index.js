import express from "express";
import cors from "cors";
import routes from "./routes/index.js";
import bodyParser from "body-parser";
import methodOverride from "method-override";
import dotenv from "dotenv";
import path from "path";
dotenv.config();

const app = express();
const PORT = process.env.PORT;
const _dirname = path.dirname("");
const buildPath = path.join(_dirname, "../client/build");

app.use(express.static(buildPath));
app.use(methodOverride("_method"));
app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// const db = require("./models/index.db");

app.use("/api", routes);

app.get("/*", function (req, res) {
  res.sendFile(path.resolve(buildPath, "index.html"), function (err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is rockin' on port ${PORT}`);
});
