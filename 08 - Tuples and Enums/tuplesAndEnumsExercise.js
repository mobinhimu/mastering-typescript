/*Tuple Manipulation: Create a function that takes in two tuples of equal length and merges them into a single tuple, alternating elements from each input tuple. For example, given (1, 2, 3) and ('a', 'b', 'c'), the function should return (1, 'a', 2, 'b', 3, 'c').

Tuple Unpacking: Write a program that receives a list of tuples, each containing a student's name and their score in a subject. Unpack this data and print the names of students who scored above a certain threshold.*/
function tookTwoTuples(numTup, strTup) {
  var printedTuples = [];
  numTup.forEach(function (_, i) {
    printedTuples.push(numTup[i], strTup[i]);
  });
  return printedTuples;
}
console.log(tookTwoTuples([10, 250, 5], ["Mobin", "Himon", "Mihad"]));
function studentTuple(students, threshold) {
  students.forEach(function (_a) {
    var name = _a.name,
      score = _a.score;
    if (score >= threshold) {
      console.log(
        "".concat(name, " scored ").concat(score, " and passed the threshold.")
      );
    }
  });
}
var students = [
  { name: "Mobin", score: 10 },
  { name: "Rozen", score: 50 },
  { name: "asdf", score: 80 },
  { name: "d", score: 19 },
  { name: "asasdfdf", score: 90 },
];
var threshold = 50;
studentTuple(students, threshold);

const obj = {
  a: 10,
  b: 250,
};

Object.freeze(obj);

const newObj = obj;
newObj.a = 107444444444444;
newObj.b = 555555555;

console.log(newObj);
