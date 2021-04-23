const mongoose = require('mongoose');
const {mongodb} = require('./keys');

mongoose.connect(mongodb.URI, {useUnifiedTopology: true})
	.then(db => console.log('db connect'))
	.catch(err => console.error(err));
