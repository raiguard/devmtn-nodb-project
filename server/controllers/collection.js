let collection = [];

let nextIndex = 0;

module.exports = {
  getAll: (req, res) => {
    res.status(200).send(collection);
  },
  add: (req, res) => {
    const { name, image } = req.body;
    collection.push({ name, image, index: nextIndex });
    nextIndex++;

    res.sendStatus(200);
  },
  editName: (req, res) => {
    let { index } = req.params;
    const { newName } = req.body;

    index = Number(index);

    const pos = collection.findIndex((amiibo) => amiibo.index === index);
    if (pos !== -1) {
      collection[pos].name = newName;
      res.sendStatus(200);
    } else {
      res.status(500).send(`Could not find amiibo in collection of index ${index}`);
    }
  },
  deleteOne: (req, res) => {
    const index = Number(req.params.index);
    const pos = collection.findIndex((amiibo) => amiibo.index === index);
    console.log(index, pos);
    if (pos !== -1) {
      collection.splice(pos, 1);
      res.sendStatus(200);
    } else {
      res.status(500).send(`Could not find amiibo in collection of index ${index}`);
    }
  }
};
