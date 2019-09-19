const axios = require('axios');

exports.postAlarm = (alarm) => {
  const {
    url,
    component,
    error,
  } = alarm;
  axios(url, {
    method: 'post',
    url: URL,
    headers: {
      'Content-type': 'application/json',
    },
    data: {
      text: `An error was thrown in the ${component} controller:\n ${error};`,
    },
  });
};
