const express = require("express");
const app = express();

const amiiboController = require("./controllers/amiibo");
const collectionController = require("./controllers/collection");

app.get("/api/amiibo", amiiboController.getAll);
app.get("/api/amiibo/:id", amiiboController.getOne);

const port = 3333;
app.listen(3333, () => console.log("Server started on port 3333"));
