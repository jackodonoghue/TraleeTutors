const request = require('request');
const apiOptions = {
  server: 'http://localhost:3000'
};
if (process.env.NODE_ENV === 'production') {
  apiOptions.server = 'https://tralee-tutors.herokuapp.com/';
}

const grindInfo = {
  id: 1,
  grindTitle: 'Web Dev Grind',
  author: 'Jack ODonoghue',
  description: 'Forfeited you engrossed but gay sometimes explained. Another as studied it to evident. Merry sense given he be arise.',
  times: ['12:00', '12:30', '1:00', '1:30'],
  rating: 3
};

/* GET 'Discover Grinds' page */
const grinds = function (req, res) {
  res.render('grinds', {
    title: 'Discover Grinds',
    grindInfo
  });
};

/* GET 'Book Grinds' page */
const bookGrinds = function (req, res) {
  res.render('view-grind', {
    title: grindInfo.grindTitle,
    grindInfo
  });
}

/* GET 'grinds' page */
const grindlist = function (req, res) {
  const path = '/grinds';
  const requestOptions = {
    url: apiOptions.server + path,
    method: 'GET',
    json: {},
    qs: {}
  };
  request(requestOptions, (err, response, body) => {
    _renderHomepage(req, res, body);
  }
  );
};


const _renderHomepage = function (req, res, responseBody) {
  let message = null;
  if (!(responseBody instanceof Array)) {
    message = "API lookup error";
    responseBody = [];
  } else {
    if (!responseBody.length) {
      message = "No places found nearby";
    }
  }
  res.render('locations-list', {
    title: 'Loc8r - find a place to work with wifi',
    pageHeader: {
      title: 'Loc8r',
      strapline: 'Find places to work with wifi near you!'
    },
    sidebar: "Looking for wifi and a seat? Loc8r helps you find places to work when out and about. Perhaps with coffee, cake or a pint? Let Loc8r help you find the place you're looking for.",
    locations: responseBody,
    message: message
  });
};


module.exports = {
  grinds,
  bookGrinds,
  grindInfo
};
