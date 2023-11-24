import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import punycode from "punycode";

//components
import Connection from "./database/connectionDB";

const app = express();
dotenv.config();

// middleware
app.use(express.json());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// connnect database
Connection();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
