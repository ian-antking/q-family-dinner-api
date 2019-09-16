const axios = require('axios');

exports.postContactMessage = (request, response) => {
  const URL = process.env.SLACK_ENQUIRY_HOOK;
  axios({
    method: 'post',
    url: URL,
    headers: {
      'Content-type': 'application/json',
    },
    data: {
      text: request.body.text,
    },
  })
    .then(res => {
      response.status(200).send(res.data);
    })
    .catch(error => {
      response.status(error.response.status).json({ message: error.message });
    });
};
