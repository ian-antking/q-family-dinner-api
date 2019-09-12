const axios = require('axios');

exports.getEvents = (_, response) => {
  const TOKEN = process.env.FACEBOOK_TOKEN;
  const URL = `https://graph.facebook.com/v4.0/638643326624464/events?access_token=${TOKEN}`;
  axios.get(URL)
    .then(res => {
      response.status(200).send(res.data);
    });
};
