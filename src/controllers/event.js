const FB = require('fb');

exports.getEvents = (_, res) => {
  FB.api(
    '/638643326624464/events',
    'GET',
    {
      access_token: process.env.FACEBOOK_TOKEN,
    },
    (data) => {
      res.status(200).json(data);
    }
  );
};
