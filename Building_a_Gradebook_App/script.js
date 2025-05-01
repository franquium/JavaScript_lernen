// Code for Building a Gradebook App 

// Step 1
function getAverage(scores) {
var sumScores = 0;
for (var i = 0; i < scores.length; i++){
  sumScores += scores[i]; // sum of all scores
}
var average = sumScores / scores.length; // average of scores

return average;

}

// Tests for Step 1
console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));

// Step 2
function getGrade(score) {
  if (score === 100) {
    return "A++";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

// Tests for Step 2
console.log(getGrade(96));
console.log(getGrade(82));
console.log(getGrade(56));
console.log(getGrade(0));
console.log(getGrade(100));

// Step 3
function hasPassingGrade(score) {
  return getGrade(score) !== "F";
}

// Tests for Step 3
console.log(hasPassingGrade(100));
console.log(hasPassingGrade(53));
console.log(hasPassingGrade(87));


// Step 4
function studentMsg(totalScores, studentScore) {
var classAverage = getAverage(totalScores);
var studentGrade = getGrade(studentScore);

if (hasPassingGrade(studentScore)){
  return "Class average: " + classAverage + "." + " Your grade: "+ studentGrade + ". You passed the course."
}
else {
  return "Class average: " + classAverage + "." + " Your grade: "+ studentGrade + ". You failed the course."
}
}

// Tests for Step 4
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));

