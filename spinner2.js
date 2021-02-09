const spinnerElems = ["\r|   ", "\r/   ", "\r-   ", "\r\\   "];
let delay = 0;

const spinner = (array, delayAmount) => {
  for (const elem of array) {
    setTimeout(() => {
      process.stdout.write(elem);
    }, delay);
    delay += delayAmount;
  }
};

// spinner(spinnerElems);

const loopSpinner = (numOfSpins) => {
  for (let i = 0; i < numOfSpins; i++) {
    spinner(spinnerElems, 1);
  }
};

loopSpinner(1000);

// other solution

const chars = ["|", "/", "-", "\\", "|", "/", "-", "\\"];

let when = 0;
for (const char of chars) {
  when += 200;
  // console.log(char, when);
  setTimeout(() => {
    process.stdout.write(`\r${char}   `);
  }, when);
}
