const axios = require('axios');

exports.getThreeWords = (request, response) => {
  const TOKEN = process.env.THREE_WORDS_TOKEN;
  const long = request.query.long;
  const lat = request.query.lat;
  if (long && lat) {
    const URL = `https://api.what3words.com/v3/convert-to-3wa?coordinates=${lat},${long}&key=${TOKEN}`;
    axios.get(URL)
      .then(res => {
        response.status(200).send(res.data);
      });
  } else {
    response.status(400).send('no coordinates supplied');
  }
};
