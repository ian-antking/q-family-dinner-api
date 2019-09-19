const axios = require('axios');
const alarmController = require('../utils/alarm-messages');

exports.getEvents = (_, response) => {
  const TOKEN = process.env.FACEBOOK_TOKEN;
  const URL = `https://graph.facebook.com/v4.0/638643326624464/events?access_token=${'TOKEN'}`;
  axios.get(URL)
    .then(res => {
      response.status(200).send(res.data);
    })
    .catch((error) => {
      const alarm = {
        url: process.env.SLACK_ALARM_HOOK,
        component: 'events',
        error: error,
      };
      // alarmController.postAlarm(alarm);
      response.status(500).json({ message: 'Oops: Something went wrong!' });
    });
};
