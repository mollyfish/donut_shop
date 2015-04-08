(function() {
	var DonutShop = window.DonutShop;

	var dataTable = document.getElementById('daily-stats');
	var newShopForm = document.getElementById('add-location');

	newShopForm.addEventListener('submit', function(event) {
		event.preventDefault();
		if ((!event.target.newName.value) || (!event.target.minCustHr.value) || (!event.target.maxCustHr.value) || (!event.target.avgDonutPurch.value)) {
			return alert('All fields must be filled in!');
		}
		var newShop = new DonutShop(event.target.newName.value, {minCust: Number.parseFloat(event.target.minCustHr.value), maxCust: Number.parseFloat(event.target.maxCustHr.value), avgDonPurch: Number.parseFloat(event.target.avgDonutPurch.value)});
		event.target.newName.value = '';
		event.target.minCustHr.value = '';
		event.target.maxCustHr.value = '';
		event.target.avgDonutPurch.value = '';
		dataTable.appendChild(newShop.render());
	});
})();