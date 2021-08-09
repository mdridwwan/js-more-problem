 // Problem 01 ans :
 function seerToMon(seer) {

     if (seer >= 0) {
         let mon = seer / 40;
         return mon
     } else {
         return "Invalid input"
     }
 }

 // to see output //

 const totalMon = seerToMon(160);
 console.log(totalMon);

 // Problem 02 ans :

 function totalSales(shirtQuantity, pantQauntity, shoesQuantity) {

     if (shirtQuantity >= 0 && pantQauntity >= 0 && shoesQuantity >= 0) {
         const shirtPrice = 100;
         const pantPrice = 200;
         const shoesPrice = 500;
         let shirtTotalPrice = shirtPrice * shirtQuantity;
         let pantTotalPrice = pantPrice * pantQauntity;
         let shoesTotalPrice = shoesPrice * shoesQuantity;
         let totalSales = shirtTotalPrice + pantTotalPrice + shoesTotalPrice;
         return totalSales;
     } else {
         return "Invalid input"
     }

 }

 // to see output //
 const totalPrice = totalSales(5, 1, 1);
 console.log(totalPrice);

 // Problem 03 ans:

 function deliveryCost(quantity) {

     if (quantity < 0) {
         return "Invalid input"
     } else if (quantity <= 100) {
         const firstDeliveryCost = quantity * 100;
         return firstDeliveryCost;
     } else if (quantity <= 200) {
         const firstDeliveryCost = 100 * 100;
         const totalCost = quantity - 100;
         const secondDeliveryCost = totalCost * 80;
         const totalDeliveryCost = firstDeliveryCost + secondDeliveryCost;
         return totalDeliveryCost;
     } else {
         const firstDeliveryCost = 100 * 100;
         const secondDeliveryCost = 100 * 80;
         const totalCost = quantity - 200;
         const thiredDeliveryCost = totalCost * 50;
         const totalDeliveryCost = firstDeliveryCost + secondDeliveryCost + thiredDeliveryCost;
         return totalDeliveryCost;

     }
 }

 // to see output //

 let totalDeliveryCost = deliveryCost(301);
 console.log(totalDeliveryCost)

 // Problem 04 ans :  //

 function perfectFriend(friendsName) {

     for (let element of friendsName) {
         if (typeof element === 'number') {
             return "Invalid input";
         } else if (element.length == 5) {
             return element;
         }
     }
 }

 // to see output //

 const myFriends = ['Ridwan', 'Jumu', 'Jannat', 'Raisa', 'Rohan', 'Alon', 'Rafi', 'Farhan'];
 const bestFriend = perfectFriend(myFriends);
 console.log(bestFriend);