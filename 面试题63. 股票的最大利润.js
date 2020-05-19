/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice=Infinity;
    let maxpro=0;
    prices.forEach((price)=>{
        maxpro=Math.max(maxpro,price-minPrice)
        if(price<minPrice){
            minPrice=price
        }
    })
    return maxpro
};