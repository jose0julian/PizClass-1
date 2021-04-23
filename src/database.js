const mongoose = require('mongoose');
const {mongodb} = require('./keys');

mongoose.set('useFindAndModify', false);
mongoose.connect(mongodb.URI, {useUnifiedTopology: true, useNewUrlParser: true})
	.then(db => console.log('DB conectada con exito'))
	.catch(err => console.error(err));
