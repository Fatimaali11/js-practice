//switch statment
let day = 6;
let dayName;

switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  case 7:
    dayName = "Sunday";
    break;
  default:
    dayName = "Invalid day";
}
console.log(dayName); 

//ternary operator
let age = 18;
let canVote;

if (age >= 18) {
  canVote = "Yes, you can vote";
} else {
  canVote = "No, you cannot vote";
}
console.log(canVote); 

 // callback function
 function displayMessage(message) {
  console.log(message);
}
setTimeout(function() {
  displayMessage("hey time is over");
}, 2000);

//  a promise
const myPromise = new Promise((resolve, reject) => {
  
  setTimeout(() => {
    const randomNumber = Math.random();
    
    if (randomNumber < 0.5) {
      resolve(randomNumber); 
    } else {
      reject("The number is too large!"); 
    }
  }, 2000); 
});

myPromise
  .then((result) => {
    console.log("The promise was resolved :", result);
  })
  .catch((error) => {
    console.log("The promise was rejected :", error);
  });
 
