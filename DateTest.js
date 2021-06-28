var CIAssetPurchaseDate;
var FinYearEndDate;
var FinYearEndDateTime;
var PurchaseYear;
var PurchaseMonth;
var FirstFinYearDays;
var NumberOfDays;
var CIAssetUsefulLife;
var CIAssetPurchasePrice;
var CIAssetSalvagePrice;
var DepreciationExpense;
var NetBookValue;

var CIAssetPurchaseDate = new Date("08/09/2019");
var FinYearEndDate = new Date("08/09/2019");
var CIAssetUsefulLife = "48";
var CIAssetPurchasePrice = "687466.00";
var CIAssetSalvagePrice = "49000.00";

//Calculate days between two dates
function diffdays(enddate, startdate) {
    var days = (new Date(enddate).getTime() - new Date(startdate).getTime()) / (1000*3600*24);
    return days;
}

console.log("The date in use is: " + CIAssetPurchaseDate);

var PurchaseYear = CIAssetPurchaseDate.getFullYear();
var PurchaseMonth = CIAssetPurchaseDate.getMonth();

console.log("The purchase year is: " + PurchaseYear + " and the purchase month is: " + PurchaseMonth);

//Find the First End of Financial Year
if (PurchaseMonth <= 5) {
    var FinYearEndDate = new Date(FinYearEndDate.setFullYear(PurchaseYear, 5, 30)).toString();
} else {
    var FinYearEndDate = new Date(FinYearEndDate.setFullYear((PurchaseYear + 1 ), 5, 30)).toString();
};

//if (PurchaseMonth <= 5) {
//    var FinYearEndDateTime = new Date(CIAssetPurchaseDate.setFullYear(PurchaseYear, 5, 30)).toLocalDateString();
//} else {
//    var FinYearEndDateTime = new Date(CIAssetPurchaseDate.setFullYear((PurchaseYear + 1 ), 5, 30)).toLocalDateString();
//};

console.log("The Financial Year End date is " + FinYearEndDate);
//console.log("The Financial year end date time is " + FinYearEndDateTime);
console.log("The Asset Purchase Date is now " + CIAssetPurchaseDate);

//Find the number of days from purchase to end of financial year
var FinYearEndDateTime = new Date(FinYearEndDate).getTime();
var CIAssetPurchaseDateTime = new Date(CIAssetPurchaseDate).getTime();

console.log("The Financial year end date time is " + FinYearEndDateTime + " minus " + CIAssetPurchaseDateTime);

var FirstFinYearDays = diffdays(FinYearEndDate, CIAssetPurchaseDate);

console.log("The difference in time is " + FirstFinYearDays);

//Find the Depreciation Expense Value
var CIAssetUsefulLifeEnd = new Date(CIAssetPurchaseDate)
CIAssetUsefulLifeEnd.setMonth(CIAssetUsefulLifeEnd.getMonth() + parseInt(CIAssetUsefulLife));

console.log("CI End useful life date is " + CIAssetUsefulLifeEnd);

var totaldiff = diffdays(CIAssetUsefulLifeEnd, CIAssetPurchaseDate);

console.log("Purchase Price = " + CIAssetPurchasePrice + " Salvage Price = " + CIAssetSalvagePrice + " Days from Purchase to End = " + totaldiff + " Days this financial year = " + FirstFinYearDays);

var DepreciationExpense = (
    (CIAssetPurchasePrice - CIAssetSalvagePrice) / (diffdays(CIAssetUsefulLifeEnd, CIAssetPurchaseDate)) * FirstFinYearDays
).toFixed(2);

console.log("The Depreciation Expense for Year 1 is " + DepreciationExpense);

//Find the Net Book Value
var NetBookValue = CIAssetPurchasePrice - DepreciationExpense;

console.log("The Net Book Value for Year 1 is " + NetBookValue);