const spinnerElems = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ']
let delay = 0; 

const spinner = (array) => {
  for (const elem of array) {
    setTimeout(() => {
      process.stdout.write(elem)
    }, delay);
    delay += 200;
  };
};

spinner(spinnerElems); 



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

