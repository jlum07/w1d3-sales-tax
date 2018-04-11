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

  // console.log(salesData[2]);

  // for (var i = 0; i < salesData.length; i++) {
  for (var i in salesData) {
    // sales[i.name] = {};
    if (sales[salesData[i].name]) {
      sales[salesData[i].name].totalSales += salesData[i].sales.reduce(add, 0);
      sales[salesData[i].name].totalTaxes += salesData[i].sales.reduce(add, 0) * taxRates[salesData[i].province];
    } else {
      sales[salesData[i].name] = {};
      // sales[salesData[i].name].totalSales = salesData[i].sales.reduce((x, y) => x + y); //this also works
      sales[salesData[i].name].totalSales = salesData[i].sales.reduce(add, 0);
      // console.log(sales[salesData[i].name].totalSales);
      // console.log(salesData[i].sales);
      sales[salesData[i].name].totalTaxes = salesData[i].sales.reduce(add, 0) * taxRates[salesData[i].province];


    }

  }

  console.log(sales);

}

var results = calculateSalesTax(companySalesData, salesTaxRates);

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