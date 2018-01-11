//import express and burger.js
var express = require("express");

//create router for the app, and export the router at the end of your file

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
	burger.selectAll(function(data) {
		console.log(data);

		var hbsObject = {
			burgers: data
		};

		console.log(hbsObject);

		res.render("index", hbsObject);
	});
});

router.post("/burgers/create", function(req, res) {
	console.log(req.body);

	burger.insertOne([
			"burger_name", "devoured"
		], [
			req.body.burger_name, false
	], function(result) {
		res.redirect("/");
	});

});

router.put("/burgers/:id", function(req, res) {
	var condition = "id = " + req.params.id;

	console.log("condition", condition);

	burger.updateOne({
		devoured: true
	}, condition, function(result) {
		if (result.changedRows == 0) {
			return res.status(404).end();
		} else {
			res.status(200).end();
		}
	});
});


module.exports = router;


