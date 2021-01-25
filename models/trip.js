const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
	name: String,
	area: String,
	time: String,
	date: Date,
	store: String,
	quantity: Number,
});

const Trip = mongoose.model('trips', tripSchema);

module.exports = Trip;
