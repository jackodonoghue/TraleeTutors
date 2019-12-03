const request = require('request');
const apiOptions = {
server: 'http://localhost:3000',
};
if (process.env.NODE_ENV === 'production') {
apiOptions.server = 'https://tralee-tutors.herokuapp.com';
}


/* GET 'Book Grinds' page */
const bookGrinds = function (req, res) {
const path = '/api/grinds/' + req.params.grindid;
const requestOptions = {
  url: apiOptions.server + path,
  method: 'GET',
  json: {},
  qs: {}
};
request(requestOptions, (err, response, body) => {
  grindInfo = body;
  _renderOneGrind(req, res, grindInfo);
}
);
}

/* GET 'grinds' page */
const grinds = function (req, res) {
const path = '/api/grinds';
const requestOptions = {
  url: apiOptions.server + path,
  method: 'GET',
  json: {},
  qs: {}
};
request(requestOptions, (err, response, body) => {
  grindInfos = body;
  _renderHomepage(req, res, grindInfos);
}
);
};


const _renderHomepage = function (req, res, responseBody) {
res.render('grinds', {
  title: 'Grinds',
  grindInfos: responseBody
}
);
};

const _renderOneGrind = function (req, res, responseBody) {
const oneGrind = responseBody;

res.render('view-grind', {
  title: oneGrind.grindTitle,
  oneGrind
});
};

module.exports = {
grinds,
bookGrinds
};
