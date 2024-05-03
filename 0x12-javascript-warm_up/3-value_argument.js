#!/usr/bin/node

const argss = process.argv;
if (argss[2] === undefined) {
  console.log('No arguments');
} else {
  console.log(argss[2]);
}
