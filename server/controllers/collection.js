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
  }
};
