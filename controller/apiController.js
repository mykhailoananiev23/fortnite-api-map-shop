const { Client, Language } = require('fnapicom');

const client = new Client({
  language: Language.English,
  apiKey: '385794363042693120',
});

// client.aesKeys()
//   .then(console.log);

// client.brShop().then(console.log)

exports.getShopInfo = function (req, res, next) {
    res.send("hello world!")
}