const express = require("express");
const app = express();

const amiiboController = require("./controllers/amiibo");
const collectionController = require("./controllers/collection");

app.use(express.json());

app.get("/api/amiibo", amiiboController.getAll);
app.get("/api/amiibo/:id", amiiboController.getOne);
app.get("/api/collection", collectionController.getAll);
app.post("/api/collection", collectionController.add);
app.put("/api/collection/:index", collectionController.editName);
app.delete("/api/collection/:index", collectionController.deleteOne);

const port = 4444;
app.listen(port, () => console.log(`Server started on port ${port}`));
