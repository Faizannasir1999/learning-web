
// Examples of If Statement///
let x = 15;
if(x>10){
    console.log("X is Greater");
}
//  Task 1 Grading System ////
let marks = 40;

if (marks >= 90) {
  console.log("Grade: A+");
} else if (marks >= 80) {
  console.log("Grade: A");
} else if (marks >= 70) {
  console.log("Grade: B");
} else if (marks >= 60) {
  console.log("Grade: C");
} else {
  console.log("Fail");
}


// task 2//
let dayNumber = 2; 

switch (dayNumber) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid number! Please enter a number between 1 and 7.");
}
