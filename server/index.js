const express = require("express");
const app = express();

const amiiboController = require("./controllers/amiibo");
const collectionController = require("./controllers/collection");

app.use(express.json());

app.get("/api/amiibo", amiiboController.getAll);
app.get("/api/amiibo/:id", amiiboController.getOne);

const port = 4444;
app.listen(port, () => console.log(`Server started on port ${port}`));
