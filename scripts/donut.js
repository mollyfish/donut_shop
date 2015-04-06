(function() {
	var DonutShop = function(location, min, max, average) {
		this.location = location;
		this.min = min;
		this.max = max;
		this.average = average;
		hourlyTotals = [];
		dailyTotals = [];
	}
	var downtown = new DonutShop('Downtown', 8, 43, 4.50);
	var capitolHill = new DonutShop('Capitol Hill', 4, 37, 2.00);
	var southLakeUnion = new DonutShop('South Lake Union', 9, 23, 6.33);
	var wedgewood = new DonutShop('Wedgewood', 2, 28, 1.25);
	var ballard = new DonutShop('Ballard', 8, 58, 3.75);

	DonutShop.prototype.generateRandom = function () {
		customers = Math.floor(Math.random() * (this.max - this.min)) + this.min;
		return customers;
	}
	
	DonutShop.prototype.hourlyDonuts = function() {
		donutsSold = Math.round(customers * this.average);
		return donutsSold;
		
	}

	for (var hours = 7; hours < 18; hours++) {
		downtown.generateRandom();
		console.log('Hour: ' + hours);
		console.log('Customers: ' + customers);
		downtown.hourlyDonuts();
		this.hourlyTotals.push(donutsSold);
		console.log('Donuts sold that hour: ' + donutsSold);
	}

	DonutShop.prototype.dailyDonuts = function() {
		var total = 0;

		for (var i = 0; i < hourlyTotals.length; i++) {
			total += hourlyTotals[i];
		}
		console.log('Daily Total Sold: ' + total);
		return total;
	}

	console.log(downtown.hourlyTotals);
	console.log(downtown.dailyDonuts());

})();