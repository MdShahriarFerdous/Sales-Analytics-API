const Sales = require("../models/salesModel");

exports.createProduct = async (req, res) => {
	try {
		const { product, quantity, price, date } = req.body;

		if (!product.trim())
			return res.json({ error: "Product name is required" });
		if (!quantity) return res.json({ error: "Quantity is required" });
		if (!price) return res.json({ error: "Price is required" });

		const newProduct = await new Sales({
			product,
			quantity,
			price,
			date,
		}).save();

		res.json(newProduct);
	} catch (error) {
		console.log(error.message);
		return res.json(error.message);
	}
};
exports.allData = async (req, res) => {
	try {
		const data = await Sales.find();
		res.json(data);
	} catch (error) {
		console.log(error.message);
		return res.json(error.message);
	}
};
exports.totalRevenue = async (req, res) => {
	try {
		const totalSum = {
			$group: {
				_id: 0,
				sum: { $sum: { $multiply: ["$price", "$quantity"] } },
			},
		};
		const sumOfTotalRevenue = await Sales.aggregate([totalSum]);
		res.json({ data: sumOfTotalRevenue });
	} catch (error) {
		console.log(error.message);
		return res.json(error.message);
	}
};
exports.quantityByProduct = async (req, res) => {
	try {
		const totalQuantityOfProducts = {
			$group: {
				_id: "$product",
				quantities: { $sum: "$quantity" },
			},
		};
		const totalQuantity = await Sales.aggregate([totalQuantityOfProducts]);
		res.json({ data: totalQuantity });
	} catch (error) {
		console.log(error.message);
		return res.json(error.message);
	}
};
exports.topSelledProducts = async (req, res) => {
	try {
		const totalRevenueProducts = {
			$group: {
				_id: "$product",
				totalRevenue: { $sum: { $multiply: ["$quantity", "$price"] } },
			},
		};
		const sortingByHighestRevenue = { $sort: { totalRevenue: -1 } };
		const limitingProducts = { $limit: 5 };

		const topRevenuedProducts = await Sales.aggregate([
			totalRevenueProducts,
			sortingByHighestRevenue,
			limitingProducts,
		]);
		res.json({ data: topRevenuedProducts });
	} catch (error) {
		console.log(error.message);
		return res.json(error.message);
	}
};
exports.averagePrice = async (req, res) => {
	try {
		const avgPrice = {
			$group: {
				_id: 0,
				avgPrice: { $avg: "$price" },
			},
		};
		const productAveragePrice = await Sales.aggregate([avgPrice]);
		res.json({ data: productAveragePrice[0]?.avgPrice || 0 });
	} catch (error) {
		console.log(error.message);
		return res.json(error.message);
	}
};
exports.monthRevenue = async (req, res) => {
	try {
		const totalRevenueByDate = {
			$group: {
				_id: { month: { $month: "$date" }, year: { $year: "$date" } },
				totalRevenue: { $sum: { $multiply: ["$quantity", "$price"] } },
			},
		};
		const monthField = {
			$addFields: {
				monthName: {
					$let: {
						vars: {
							monthsInString: [
								"January",
								"February",
								"March",
								"April",
								"May",
								"June",
								"July",
								"August",
								"September",
								"October",
								"November",
								"December",
							],
						},
						in: {
							$arrayElemAt: [
								"$$monthsInString",
								{ $subtract: ["$_id.month", 1] },
							],
						},
					},
				},
			},
		};
		const projectByMonthAndYear = {
			$project: {
				_id: 0,
				year: "$_id.year",
				month: "$_id.month",
				totalRevenue: 1,
				monthName: 1,
			},
		};
		const revenueByMonth = await Sales.aggregate([
			totalRevenueByDate,
			monthField,
			projectByMonthAndYear,
		]);
		res.json({ data: revenueByMonth });
	} catch (error) {
		console.log(error.message);
		return res.json(error.message);
	}
};
exports.highestQuantity = async (req, res) => {
	try {
		const maxQuantity = {
			$group: {
				_id: "$product",
				maxQuantitySold: { $max: "$quantity" },
			},
		};
		const sortingByMax = { $sort: { maxQuantitySold: -1 } };
		const limitToMaxSoldProduct = { $limit: 1 };

		const highestSoldProductIs = await Sales.aggregate([
			maxQuantity,
			sortingByMax,
			limitToMaxSoldProduct,
		]);
		res.json({ data: highestSoldProductIs });
	} catch (error) {
		console.log(error.message);
		return res.json(error.message);
	}
};
exports.salaryExpense = async (req, res) => {
	try {
		const departmentMapping = {
			Shirt: "Clothing",
			"Polo-Shirt": "Clothing",
			"Denim-Pant": "Clothing",
			"Nike-shoe": "Footwear",
			"O-Code Blazer": "Clothing",
			"Phone-case": "Accessories",
			"iPhone 13 Pro Max": "Mobile",
			"iPhone XS": "Mobile",
			"MacBook Pro M1 8/512GB": "Laptops",
			"WiWU Protective Keyboard": "Accessories",
		};
		const addDepartmentField = {
			$addFields: {
				department: {
					$ifNull: [
						"$department", // ==>if not null
						//if null then go to below
						{
							$arrayElemAt: [
								Object.values(departmentMapping), //creating array
								{
									$indexOfArray: [
										//getting index
										Object.keys(departmentMapping),
										"$product",
									],
								},
							],
						},
					],
				},
			},
		};
		const totalSalaryExpense = {
			$group: {
				_id: "$department",
				totalSalaryExpense: {
					$sum: { $multiply: ["$quantity", "$price"] },
				},
			},
		};
		const projectDepartmentWithSalary = {
			$project: {
				_id: 0,
				department: "$_id",
				totalSalaryExpense: 1,
			},
		};
		const sortingByMax = { $sort: { totalSalaryExpense: -1 } };

		const salesWithDepartment = await Sales.aggregate([
			addDepartmentField,
			totalSalaryExpense,
			projectDepartmentWithSalary,
			sortingByMax,
		]);

		res.json({ data: salesWithDepartment });
	} catch (error) {
		console.log(error.message);
		return res.json(error.message);
	}
};
