function sumLargestNumbers(data){
  let numX = 0;
  for (let i = 0; i < data.length; i++){ 
  if (data[i] > numX){
    numX = data[i];
  }
 }
 data.splice(data.indexOf(numX), 1);
 
 let numY = 0;
  for (let j = 0; j < data.length; j++){ 
  if (data[j] > numY){
    numY = data[j];
  }
}
return numX + numY;
}
console.log(sumLargestNumbers([1, 10]));