// prac_prob01.js

let arr = ['10', '11', '9', '7', '8'];
console.log(arr);

arr.sort((a, b) => {
  if (Number(a) - Number(b) > 0) {
    return -1;
  } else if (Number(a) - Number(b) < 0) {
    return 1;
  } else {
    return 0;
  }
});

console.log(arr);
