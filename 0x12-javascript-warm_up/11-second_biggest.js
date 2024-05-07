#!/usr/bin/node

const args = process.argv;

if (args <= 3) {
  console.log('0');
} else {
  let second = parseInt(args[2]);
  let high = parseInt(args[3]);
  for (let i = 2; i < args.length; i++) {
    const now = parseInt(args[1]);
    if (now > high) {
      second = high;
      high = now;
    } else if (now > second && now < high) {
      second = now;
    }
  }
  console.log(second);
}
