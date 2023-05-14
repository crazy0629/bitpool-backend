import { SERVER_PORT } from "./config";
import express from "express";
import cors from "cors";
import fs from "fs";

import passport from "passport";
import middlewarePassport from "./service/passport";

import apiRoutes from "./routes/api.routes";

const app = express();

//Settings
app.set("port", SERVER_PORT);

var corsOption = {
  origin: `*`,
  methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
  credentials: true,
  exposedHeaders: ["x-auth-token"],
  url: ["https://54.241.228.25", "https://localhost:3000", "https://portal.bitpool.gg", "https://44.202.18.46:443"],
};
app.use(cors(corsOption));
app.use(express.json());
app.use(express.static("./client/build"));
app.use(express.urlencoded({ extended: false }));

//Passport
app.use(passport.initialize());
passport.use(middlewarePassport);

//Routes
app.use("/api", apiRoutes);

app.get("*", (req, res) => {
  fs.readFile('./client/build/index.html', { encoding: 'utf-8' }, (err, data) => {
    if(!data)
      res.send('Error occurred in client/build/index.html');
    else
      res.send(data);
  })
});

export default app;
