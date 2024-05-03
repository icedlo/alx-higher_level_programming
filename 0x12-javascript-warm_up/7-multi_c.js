#!/usr/bin/node

const [,, args] = process.argv;
const x = parseInt(args);

if (!isNaN(x)) {
  for (let i = 0; i < x; i++) {
    console.log('C is fun');
  }
} else {
  console.log('Missing number of occurrences');
}
