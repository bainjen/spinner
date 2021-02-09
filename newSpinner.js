// We can use the special character \r to return our cursor back to the beginning of the line that we were on. After this, anything we write next to stdout will overwrite the line.

const chars = ["|", "/", "-", "\\", "|", "/", "-", "\\"];

//sample
process.stdout.write("hello from spinner1.js... \rheyyy\n");
// heyyy from spinner1.js...
setTimeout(() => {
  process.stdout.write("\r|   ");
}, 100);

setTimeout(() => {
  process.stdout.write("\r/   ");
}, 300);

setTimeout(() => {
  process.stdout.write("\r-   ");
}, 500);

setTimeout(() => {
  process.stdout.write("\r\\   ");
}, 700);

setTimeout(() => {
  process.stdout.write("\r|   ");
}, 900);

setTimeout(() => {
  process.stdout.write("\r/   ");
}, 1100);

setTimeout(() => {
  process.stdout.write("\r-   ");
}, 1300);

setTimeout(() => {
  process.stdout.write("\r\\   ");
}, 1500);

setTimeout(() => {
  process.stdout.write("\r|   ");
}, 1700);

setTimeout(() => {
  process.stdout.write("\n");
}, 1900);
