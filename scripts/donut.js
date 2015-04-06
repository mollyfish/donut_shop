(function() {



	/*DonutShop.prototype.isOpen(time) {
		return (time > this.opens && time < this.closes);
	};*/

	var DonutShop = function(location, minCust, maxCust, avgDonPurch, opens, closes) {
		this.location = location;
		this.minCust = minCust;
		this.maxCust = maxCust;
		this.avgDonPurch = avgDonPurch;
		this.opens = opens;
		this.closes = closes;
		hourlyTotals = [];
	}

	var shops = [];

	shops.push(new DonutShop('Downtown', 8, 43, 4.50, 6, 18))
	shops.push(new DonutShop('Capitol Hill', 4, 37, 2.00, 6, 18))
	shops.push(new DonutShop('South Lake Union', 9, 23, 6.33, 6, 18))
	shops.push(new DonutShop('Wedgewood', 2, 28, 1.25, 6, 18))
	shops.push(new DonutShop('Ballard', 8, 58, 3.75, 6, 18))

	DonutShop.prototype.generateRandom = function () {
		customers = Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
		return customers;
		console.log(customers);
	}
	
	DonutShop.prototype.hourlyDonuts = function() {
		donutsSold = Math.round(customers * this.avgDonPurch);
		return donutsSold;
	}

	for (var hours = 7; hours < 18; hours++) {//this should loop thru the array of instances
		//this.generateRandom();
		console.log('Hour: ' + hours);
		console.log('Customers: ' + customers);
		//this.hourlyDonuts();
		this.hourlyTotals.push(donutsSold);
		console.log('Donuts sold that hour: ' + donutsSold);
	};

	DonutShop.prototype.dailyDonuts = function() {
		var total = 0;

		for (var i = 0; i < hourlyTotals.length; i++) {
			total += hourlyTotals[i];
		}
		return total;
	}

	console.log(hourlyTotals);
	console.log(downtown.dailyDonuts());

})();