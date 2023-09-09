const express = require("express");
const {
	createProduct,
	totalRevenue,
	quantityByProduct,
	topSelledProducts,
	averagePrice,
	monthRevenue,
	highestQuantity,
	salaryExpense,
	allData,
} = require("../controllers/salesController");
const router = express.Router();

// For creating sales product.
router.post("/create-product", createProduct);
router.get("/all-data", allData);
// Assignmented Routes.
router.get("/api/sales/total-revenue", totalRevenue);
router.get("/api/sales/quantity-by-product", quantityByProduct);
router.get("/api/sales/top-products", topSelledProducts);
router.get("/api/sales/average-price", averagePrice);
router.get("/api/sales/revenue-by-month", monthRevenue);
router.get("/api/sales/highest-quantity-sold", highestQuantity);
router.get("/api/sales/department-salary-expense", salaryExpense);

module.exports = router;
