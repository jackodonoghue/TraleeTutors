/* GET 'Register' page */
const register = function(req, res){
res.render('index', { title: 'Register' });
};
/* GET 'Login' page */
const login = function(req, res){
res.render('login', { title: 'Login' });
};

/* GET 'Discover Grinds' page */
const grinds = function(req, res){
res.render('grinds', { title: 'Discover Grinds',
grindInfo: [{
title: 'Web frameworks grind',
description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. In modi earum fugiat sunt eaque? Pariatur harum numquam eligendi nobis, adipisci, quis ullam illum expedita maxime error repellendus deserunt incidunt placeat.'
},
{
title: 'Web frameworks grind',
description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. In modi earum fugiat sunt eaque? Pariatur harum numquam eligendi nobis, adipisci, quis ullam illum expedita maxime error repellendus deserunt incidunt placeat.'
},
{
title: 'Web frameworks grind',
description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. In modi earum fugiat sunt eaque? Pariatur harum numquam eligendi nobis, adipisci, quis ullam illum expedita maxime error repellendus deserunt incidunt placeat.'
},
{
title: 'Web frameworks grind',
description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. In modi earum fugiat sunt eaque? Pariatur harum numquam eligendi nobis, adipisci, quis ullam illum expedita maxime error repellendus deserunt incidunt placeat.'
}]
});
};

/* GET 'Book Grinds' page */
const bookGrinds = function(req, res){
res.render('view-grind', { title: 'Book Grinds',
grindHeader: { 
title: 'Example Grind', 
tutor: 'John Smith' 
},
description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. In modi earum fugiat sunt eaque? Pariatur harum numquam eligendi nobis, adipisci, quis ullam illum expedita maxime error repellendus deserunt incidunt placeat.',
times: ['12:00', '12:30', '1:00', '1:30']
});
}
module.exports = {
register,
login,
grinds,
bookGrinds
};
