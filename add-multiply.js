/* 
chairWood = 3cubic feet/chair;
tableWood = 10cft/table;
badWood = 50cft/bad;
*/
function woodCalculator(chairQuantity, tableQuantity, badQuantity) {
    const chairWood = 3;
    const tableWood = 10;
    const badWood = 50;
    let chairResult = chairQuantity * chairWood;
    // console.log(chairResult);
    let tableResult = tableQuantity * tableWood;
    let badResult = badQuantity * badWood;
    const totalResult = chairResult + tableResult + badResult;
    return totalResult

};
const woodResult = woodCalculator(10, 10, 10);
console.log(woodResult);