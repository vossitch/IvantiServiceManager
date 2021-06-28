//This script is to create a depreciation schedule for Assets
var CIAssetPurchaseDate;
var FinYearEndDate;
var FinYearStartDate;
var PurchaseYear;
var PurchaseMonth;
var FinYearDays;
var CIAssetUsefulLife;
var CIAssetPurchasePrice;
var CIAssetSalvagePrice;
var DepreciationExpense;
var NetBookValue;
var FinancialYear;
var CIAssetUsefulLifeYears;
var CIAssetUsefulLifeEnd;
var LastFinYearEndDate;
var CITotalUsefulLifeDays;

//Variables required for out of ISM
var CIAssetPurchaseDate = new Date("04/08/2019");
var FinYearStartDate =new Date("04/08/2019");
var FinYearEndDate = new Date("04/08/2019");
var CIAssetUsefulLife = "48";
var CIAssetPurchasePrice = "13499.00";
var CIAssetSalvagePrice = "1000.00";

var FinancialYear = 0;
var CIAssetUsefulLifeYears = CIAssetUsefulLife / 12;
var CIAssetUsefulLifeCount = CIAssetUsefulLife / 12 + 1;
var NetbookValue = 0;

var PurchaseYear = CIAssetPurchaseDate.getFullYear();
var PurchaseMonth = CIAssetPurchaseDate.getMonth();

console.log("The purchase year is: " + PurchaseYear + " and the purchase month is: " + PurchaseMonth);

console.log("Asset useful life in years is: " + CIAssetUsefulLifeYears);

//Calculate days between two dates
function diffdays(enddate, startdate) {
    var days = (new Date(enddate).getTime() - new Date(startdate).getTime()) / (1000*3600*24);
    return days;
}

//Find the First End of Financial Year End Date
if (PurchaseMonth <= 5) {
    var FinYearEndDate = new Date(FinYearEndDate.setFullYear(PurchaseYear, 5, 30)).toString();
} else {
    var FinYearEndDate = new Date(FinYearEndDate.setFullYear((PurchaseYear + 1 ), 5, 30)).toString();
};

//Find the Final End of Financial Year End Date
var CIAssetUsefulLifeEnd = new Date(CIAssetPurchaseDate)
CIAssetUsefulLifeEnd.setMonth(CIAssetUsefulLifeEnd.getMonth() + parseInt(CIAssetUsefulLife));

//Find Total number of useful life days
var CITotalUsefulLifeDays = diffdays(CIAssetUsefulLifeEnd, CIAssetPurchaseDate);

console.log("The First Financial Year End date is " + FinYearEndDate);
console.log("The last Financial Year End Date & Asset End useful life date is " + CIAssetUsefulLifeEnd);
console.log("The Asset Purchase Date is now " + CIAssetPurchaseDate);

while (CIAssetUsefulLifeCount > 0) {
    var FinancialYear = FinancialYear + 1;
    var CIAssetUsefulLifeCount = CIAssetUsefulLifeCount - 1;
    
console.log("Creating Depreciation Schedule for Financial Year " + FinancialYear + ", remaining years is " + CIAssetUsefulLifeCount);

console.log("The Purcahse date in use is: " + CIAssetPurchaseDate);

//Find the number of days in this financial year
var FinYearDays = diffdays(FinYearEndDate, FinYearStartDate);

console.log("The days in this financial year are " + FinYearDays);

//Find the Depreciation Expense Value

console.log("Purchase Price = " + CIAssetPurchasePrice + " Salvage Price = " + CIAssetSalvagePrice + " Total Assets Useful Life days = " + CITotalUsefulLifeDays);

var DepreciationExpense = (
    (CIAssetPurchasePrice - CIAssetSalvagePrice) / (diffdays(CIAssetUsefulLifeEnd, CIAssetPurchaseDate)) * FinYearDays
).toFixed(2);

console.log("The Depreciation Expense for Year " + FinancialYear + " is " + DepreciationExpense);

//Find the Net Book Value
if (FinancialYear == 1) {
    var NetBookValue = (CIAssetPurchasePrice - DepreciationExpense).toFixed(2);
} else {
    var NetBookValue = (NetBookValue - DepreciationExpense).toFixed(2);
};

console.log("The Net Book Value for Year " + FinancialYear + " is " + NetBookValue);

//Update Next Financial Year Start Date
var FinYearStartDate = new Date(FinYearEndDate);
FinYearStartDate = new Date(FinYearStartDate.getFullYear(), FinYearStartDate.getMonth(), (FinYearStartDate.getDate() +1));

//Update Next Financial Year End Date

if (CIAssetUsefulLifeCount == 1 ) {
    var FinYearEndDate = new Date(CIAssetPurchaseDate)
    FinYearEndDate.setFullYear(FinYearEndDate.getFullYear() + CIAssetUsefulLifeYears);
} else {
    var FinYearEndDate = new Date(FinYearEndDate)
    FinYearEndDate.setFullYear(FinYearEndDate.getFullYear() +1);
}

console.log("New Financial year start date is " +FinYearStartDate + ", and the new end date is " + FinYearEndDate);

}