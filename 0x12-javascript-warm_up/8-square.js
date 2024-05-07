#!/usr/bin/node

const size = process.argv[2];

if (size === undefined || isNaN(parseInt(size))) {
  console.log('Mising size');
} else {
  for (let i = 0; i < parseInt(size); i++) {
    let row = '';
    for (let j = 0; j < parseInt(size); j++) {
      row += 'X';
    }
    console.log(row);
  }
}
