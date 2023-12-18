// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create a variable called highScore that can be a number OR a boolean
var highScore = 10;
highScore = true;
var stuff = [
    { s: 2, m: "hello" },
    { x: 20, z: "hello" },
];
// Create an array called colors that can hold a mixture of RGB and HSL color types
var colors = [{ b: 2, g: 2, r: 3, l: 2, s: 2 }];
// **********************************************
// ******************* PART 6 *******************
// **********************************************
// Write a function called greet that accepts a single string OR an array of strings
// It should print "Hello, <name>" for that single person OR greet each person in the array with the same format
function greet(name) {
    var arrOfNameGreat = "";
    if (typeof name === "string") {
        return "Hello, ".concat(name);
    }
    else {
        for (var _i = 0, name_1 = name; _i < name_1.length; _i++) {
            var n = name_1[_i];
            arrOfNameGreat += "Hello, ".concat(n, "\n");
        }
    }
    return arrOfNameGreat;
}
greet("Mobin");
console.log(greet(["Himon", "Mihad", "Kona"]));
