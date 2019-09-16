const axios = require('axios');

exports.getMapData = (_, response) => {
  const TOKEN = process.env.GOOGLE_MAP_TOKEN;
  const URL = `https://maps.googleapis.com/maps/api/js?key=${TOKEN}`;
  axios.get(URL)
    .then(res => {
      response.status(200).send(res.data);
    });
};
