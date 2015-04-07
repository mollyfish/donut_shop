(function() {
	var DonutShop = function(location, minCust, maxCust, avgDonPurch, opens, closes) {
		this.location = location;
		this.minCust = minCust;
		this.maxCust = maxCust;
		this.avgDonPurch = avgDonPurch;
		this.opens = opens;
		this.closes = closes;
		this.hourlyTotals = [];
	}

	var downtown = new DonutShop ('Downtown', 8, 43, 4.50);
	var capHill = new DonutShop ('Capitol Hill', 4, 37, 2.00);
	var slu = new DonutShop ('South Lake Union', 9, 23, 6.33);
	var wedge = new DonutShop ('Wedgewood', 2, 28, 1.25);
	var ballard = new DonutShop ('Ballard', 8, 58, 3.75);

	DonutShop.prototype.generateRandom = function () {
		customers = Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
		return customers;
		console.log(customers);
	}
	
	DonutShop.prototype.hourlyDonuts = function() {
		this.generateRandom();
		donutsSold = Math.round(customers * this.avgDonPurch);
		this.hourlyTotals.push(donutsSold);
	}

	DonutShop.prototype.dailyDonuts = function() {
		var total = 0;
		for (var i = 0; i < this.hourlyTotals.length; i++) {
			total += this.hourlyTotals[i];
		}
		return total;
		console.log('Hear me!' + total);
	}

	for (var hours = 7; hours < 18; hours++) {
		downtown.hourlyDonuts();
		capHill.hourlyDonuts();
		slu.hourlyDonuts();
		wedge.hourlyDonuts();
		ballard.hourlyDonuts();
	};
	console.log(downtown.hourlyTotals);
	console.log(downtown.hourlyTotals[0]);
	console.log(downtown.dailyDonuts());

	console.log(capHill.hourlyTotals);
	console.log(capHill.hourlyTotals[0]);

	console.log(slu.hourlyTotals);
	console.log(slu.hourlyTotals[0]);

	console.log(wedge.hourlyTotals);
	console.log(wedge.hourlyTotals[0]);

	console.log(ballard.hourlyTotals);
	console.log(ballard.hourlyTotals[0]);


	DonutShop.prototype.render = function() {
		for (var i = 0; i < 6; i++) {
			var rowContent = document.getElementsByTagName('tr')[(i + 2)];
			var cellContents = rowContent.innerHTML;
			var locationData = this.hourlyTotals.join([separator = '</td><td>'])
			rowContent.innerHTML = cellContents + '<td>' + locationData + '</td><td>' + this.dailyDonuts() + '</td>';
		}
	}


capHill.render();


})();