const axios = require("axios");

let allAmiibo = [];

axios
  .get("https://amiiboapi.com/api/amiibo")
  .then((res) => {
    // res.data.amiibo.forEach((amiibo) => {
    //   allAmiibo[`${amiibo.head}${amiibo.tail}`] = amiibo;
    // });
    allAmiibo = res.data.amiibo;
  })
  .catch(() => null);

module.exports = {
  getAll: (req, res) => {
    res.status(200).send(allAmiibo);
  },
  getOne: (req, res) => {
    res.status(200).send(allAmiibo[allAmiibo.findIndex((amiibo) => `${amiibo.head}${amiibo.tail}` === req.params.id)]);
  }
};
