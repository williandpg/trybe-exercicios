let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index <= 25; index += 1){
  numbers.push(index);
}

for (let index2 = 0; index2 < numbers.length; index2 += 1) {
  console.log(numbers[index2] / 2)
}