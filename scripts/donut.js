(function() {
  var shops = [];
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

  shops.push(new DonutShop('Downtown', {minCust: 8, maxCust: 43, avgDonPurch: 4.50}))
  shops.push(new DonutShop ('Capitol Hill', {minCust: 4, maxCust: 37, avgDonPurch: 2.00}))
  shops.push(new DonutShop ('South Lake Union', {minCust: 9, maxCust: 23, avgDonPurch: 6.33}))
  shops.push(new DonutShop ('Wedgewood', {minCust: 2, maxCust: 28, avgDonPurch: 1.25}))
  shops.push(new DonutShop ('Ballard', {minCust: 8, maxCust: 58, avgDonPurch: 3.75}))

  DonutShop.prototype.generateRandom = function () {
    customers = Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
    return customers;
    console.log(customers);
  }

  DonutShop.prototype.hourlyDonuts = function() {
    for (var hours = 1; hours <= this.hoursOpen; hours++) {
      this.generateRandom();
      donutsSold = Math.round(customers * this.avgDonPurch);
      this.hourlyTotals.push(donutsSold);
    };
  }

  DonutShop.prototype.dailyDonuts = function() {
    var total = 0;
    for (var i = 0; i < this.hourlyTotals.length; i++) {
      total += this.hourlyTotals[i];
    }
    return total;
  }

  DonutShop.prototype.render = function() {
    this.hourlyDonuts();
    var locationData = this.hourlyTotals.join([separator = '</td><td>'])
    var newRow = document.createElement('tr');
    newRow.innerHTML = '<th class="location">' + this.locationName + '</th><td>' + locationData + '</td><td class="daily-total">' + this.dailyDonuts() + '</td>';
    var position = document.getElementById('daily-stats');
    position.appendChild(newRow);
    return newRow;
  }

  for (var i = 0; i < shops.length; i++) {
    shops[i].render();
  };
  window.DonutShop = DonutShop;
})();
