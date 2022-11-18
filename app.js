const express = require("express");

const app = express();

const listRoutes = require("./routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/list", listRoutes);

// app.get("/", (req, res) => {
//   return res.json("Start with list");
// });

app.listen("3000", () => {
  console.log("App is listening on port 3000");
});
