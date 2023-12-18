// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create an empty array of numbers called "ages":
var ages = [];
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings
var gameBoard = [["Hello", "World"]];
var product = {
    name: "Realme C22",
    price: 10100
};
// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices
function getTotal(products) {
    return products.reduce(function (acc, product) { return product.price + acc; }, 0);
}
console.log(getTotal([product, { name: "Mac", price: 10000 }]));
