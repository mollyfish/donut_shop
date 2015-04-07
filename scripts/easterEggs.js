(function() {
  var DonutShop = window.DonutShop;

  var tableHeight;

  var dailyTotals = [];
  var el = document.getElementsByClassName('daily-total');
  console.log(rows);

    for (var i = 0; i < el.length; i++) {
      dailyTotals.push(Number.parseInt(el[i].innerHTML));
    } 
    console.log(dailyTotals);
    var topSeller = Math.max(dailyTotals[0], dailyTotals[1], dailyTotals[2], dailyTotals[3], dailyTotals[4], dailyTotals[5]);
    console.log(topSeller);
    var tableHeight = document.getElementsByTagName('tr');
    var rows = tableHeight.length;
  

  
})();