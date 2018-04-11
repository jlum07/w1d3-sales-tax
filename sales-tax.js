var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calculateSalesTax(salesData, taxRates) {
  // Implement your code here
  function add(a,b) {
    return a + b;
  }

  var sales = {};

  for (var i in salesData) {

    if (!sales[salesData[i].name]) {
      sales[salesData[i].name] = {totalSales: 0, totalTaxes: 0};
    }

    // sales[salesData[i].name].totalSales += salesData[i].sales.reduce((x, y) => x + y); //this also works
    sales[salesData[i].name].totalSales += salesData[i].sales.reduce(add, 0);
    sales[salesData[i].name].totalTaxes += salesData[i].sales.reduce(add, 0) * taxRates[salesData[i].province];

  }

  return sales;

}

var results = calculateSalesTax(companySalesData, salesTaxRates);

console.log(results);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/