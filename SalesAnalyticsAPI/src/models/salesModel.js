const mongoose = require("mongoose");

const salesSchema = new mongoose.Schema(
	{
		product: { type: String, trim: true, required: true },
		quantity: { type: Number, required: true },
		price: { type: Number, required: true },
		date: { type: Date, default: Date.now },
	},
	{ timestamps: true, versionKey: false }
);

const Sales = mongoose.model("Sale", salesSchema);
module.exports = Sales;
