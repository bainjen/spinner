const spinnerElems = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ']
let delay = 0; 

const spinner = (array, delayAmount) => {
  for (const elem of array) {
    setTimeout(() => {
      process.stdout.write(elem)
    }, delay);
    delay += delayAmount;
  };
};

// spinner(spinnerElems); 

const loopSpinner = (numOfSpins) => {
  for (let i = 0; i < numOfSpins; i++) {
    spinner(spinnerElems, 100);
  }
};

loopSpinner(5);



// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
// }, 700);

// setTimeout(() => {
//   process.stdout.write('\r|   '); 
// }, 900);

// setTimeout(() => {
//   process.stdout.write('\r/   '); 
// }, 1100);

// setTimeout(() => {
//   process.stdout.write('\r-   '); 
// }, 1300);

// setTimeout(() => {
//   process.stdout.write('\r\\   '); 
// }, 1500);

// setTimeout(() => {
//   process.stdout.write('\r|   '); 
// }, 1700);

