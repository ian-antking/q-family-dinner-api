const axios = require('axios');

exports.getThreeWords = (request, response) => {
  const long = request.body.longitude;
  const lat = request.body.latitude;
  const TOKEN = process.env.THREE_WORDS_TOKEN;
  const URL = `https://api.what3words.com/v3/convert-to-3wa?coordinates=${lat},${long}&key=${TOKEN}`;
  axios.get(URL)
    .then(res => {
      response.status(200).send(res);
    });
};
