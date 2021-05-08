const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
	heading: {
		type: String,
		required: true,
	},
	content: {
		type: String,
		required: true,
	},
	date: {
		type: String,
		required: true,
	}
});

module.exports = mongoose.model("blogs", blogSchema);
