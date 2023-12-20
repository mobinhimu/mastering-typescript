/*Tuple Manipulation: Create a function that takes in two tuples of equal length and merges them into a single tuple, alternating elements from each input tuple. For example, given (1, 2, 3) and ('a', 'b', 'c'), the function should return (1, 'a', 2, 'b', 3, 'c').

Tuple Unpacking: Write a program that receives a list of tuples, each containing a student's name and their score in a subject. Unpack this data and print the names of students who scored above a certain threshold.*/

function tookTwoTuples(
  numTup: [number, number, number],
  strTup: [string, string, string]
) {
  const printedTuples: (string | number)[] = [];
  numTup.forEach((_, i) => {
    printedTuples.push(numTup[i], strTup[i]);
  });
  return printedTuples;
}

console.log(tookTwoTuples([10, 250, 5], ["Mobin", "Himon", "Mihad"]));

interface Student {
  name: string;
  score: number;
}

function studentTuple(students: Student[], threshold: number) {
  students.forEach(({ name, score }) => {
    if (score >= threshold) {
      console.log(`${name} scored ${score} and passed the threshold.`);
    }
  });
}

const students: Student[] = [
  { name: "Mobin", score: 10 },
  { name: "Rozen", score: 50 },
  { name: "asdf", score: 80 },
  { name: "d", score: 19 },
  { name: "asasdfdf", score: 90 },
];

const threshold = 50;

studentTuple(students, threshold);

// I Solved Some Problem from codewars
