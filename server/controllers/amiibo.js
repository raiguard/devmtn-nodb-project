const axios = require("axios");

let allAmiibo = [];

module.exports = {
  getAll: (req, res) => {
    if (allAmiibo.length === 0) {
      axios
        .get("https://amiiboapi.com/api/amiibo")
        .then((res) => {
          // res.data.amiibo.forEach((amiibo) => {
          //   allAmiibo[`${amiibo.head}${amiibo.tail}`] = amiibo;
          // });
          allAmiibo = res.data.amiibo;
          res.status(200).send(allAmiibo);
        })
        .catch((err) => res.status(500).send(err));
    } else {
      res.status(200).send(allAmiibo);
    }
  },
  getOne: (req, res) => {
    res.status(200).send(allAmiibo[allAmiibo.findIndex((amiibo) => `${amiibo.head}${amiibo.tail}` === req.params.id)]);
  }
};
