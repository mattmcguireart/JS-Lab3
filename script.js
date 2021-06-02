"use strict";

let submissions = [
  {
    name: "Jane",
    score: 95,
    date: "2020-01-24",
    passed: true,
  },
  {
    name: "Joe",
    score: 77,
    date: "2010-05-14",
    passed: true,
  },
  {
    name: "Jack",
    score: 59,
    date: "2019-07-05",
    passed: false,
  },
  {
    name: "Jill",
    score: 88,
    date: "2020-04-22",
    passed: true,
  },
];

const addSubmission = (array, newName, newScore, newDate) => {
  let newObject = {
    name: newName,
    score: newScore,
    date: newDate,
    passed: newScore >= 60,
  };
  array.push(newObject);
};

addSubmission(submissions, "Matt", 90, "2020-6-1");

console.log(submissions);

const deleteSubmissionByIndex = (array, index) => {
  array.splice(index, 1);
};

// deleteSubmissionByIndex(submissions, 4);

// console.log(submissions);

// const deleteSubmissionByName = (array, name) => {
//   let index = array.findIndex((student) => student.name === name);
//   array.splice(index, 1);
// };

// deleteSubmissionByName(submissions, "Jane");

// console.log(submissions);

const editSubmission = (array, index, score) => {
  array[index].score = score;
  array[index].passed = score >= 60;
};

const findSubmissionByName = (array, name) => {
  let found = array.find((item) => item.name === name);
  return found;
};

console.log(findSubmissionByName(submissions, "Jack"));

const findLowestScore = (array) => {
  let lowestCurrentScore = array[0];
  array.forEach((item) => {
    if (item.score < lowestCurrentScore.score) {
      lowestCurrentScore = item;
    }
  });
  return lowestCurrentScore;
};

console.log(findLowestScore(submissions));

const findAverageScore = (array) => {
  let sum = 0;
  for (let submission of array) {
    sum += submission.score;
  }
  return sum / array.length;
};

console.log(findAverageScore(submissions));

const filterPassing = (array) => {
  let passing = array.filter((item) => item.passed === true);
  return passing;
};

console.log(filterPassing(submissions));

const filter90AndAbove = (array) => {
  return array.filter((item) => {
    return item.score >= 90;
  });
};

console.log(filter90AndAbove(submissions));
