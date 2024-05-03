#!/usr/bin/node
const [,, args] = process.argv;
const number = parseInt(args);

if (!isNaN(number)) {
  console.log(`My number: ${number}`);
} else {
  console.log('Not a number');
}
