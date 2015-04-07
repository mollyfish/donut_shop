(function() {
	var DonutShop = function(locationName, options) {
		this.locationName = locationName;
		this.minCust = options.minCust;
		this.maxCust = options.maxCust;
		this.avgDonPurch = options.avgDonPurch;
		this.opens = options.opens || 700;
		this.closes = options.closes || 1800;
		this.hoursOpen = (this.closes - this.opens)/100;
		this.hourlyTotals = [];
	}

	var downtown = new DonutShop ('Downtown', {minCust: 8, maxCust: 43, avgDonPurch: 4.50});
	var capHill = new DonutShop ('Capitol Hill', {minCust: 4, maxCust: 37, avgDonPurch: 2.00});
	var slu = new DonutShop ('South Lake Union', {minCust: 9, maxCust: 23, avgDonPurch: 6.33});
	var wedge = new DonutShop ('Wedgewood', {minCust: 2, maxCust: 28, avgDonPurch: 1.25});
	var ballard = new DonutShop ('Ballard', {minCust: 8, maxCust: 58, avgDonPurch: 3.75});
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
	}

	for (var hours = 1; hours < 12; hours++) {
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
	console.log(capHill.dailyDonuts());

	console.log(slu.hourlyTotals);
	console.log(slu.hourlyTotals[0]);
	console.log(slu.dailyDonuts());

	console.log(wedge.hourlyTotals);
	console.log(wedge.hourlyTotals[0]);
	console.log(wedge.dailyDonuts());

	console.log(ballard.hourlyTotals);
	console.log(ballard.hourlyTotals[0]);
	console.log(ballard.dailyDonuts());

	DonutShop.prototype.render = function() {

			var locationData = this.hourlyTotals.join([separator = '</td><td>'])
			var newRow = document.createElement('tr');
			newRow.innerHTML = '<th class="location">' + this.locationName + '</th><td>' + locationData + '</td><td>' + this.dailyDonuts() + '</td>';
			var position = document.getElementById('daily-stats');
			position.appendChild(newRow);
			return newRow;
		}

downtown.render();
capHill.render();
slu.render();
wedge.render();
ballard.render();
//newShop.render();

window.DonutShop = DonutShop;
})();