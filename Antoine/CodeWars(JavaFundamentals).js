//Sum arrays
function sum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum = sum + numbers[i];
    }
    return sum;
  }


//Beginner - Reduce but Grow
function grow(x){
    mult = 1;
   for(let i = 0; i< x.length;i++){
    mult = mult * x[i]
   }
   return mult;
 
 }


//Count positives and sum negatives
function countPositivesSumNegatives(input) {
    if (input === null || input.length === 0) {
      return [];

    } else {
      let positiveCount = 0;
      let negativeSum = 0;
  
      for (let i = 0; i < input.length; i++) {
        if (input[i] > 0) {
          positiveCount++;
        } else if (input[i] < 0) {
          negativeSum -= -(input[i]);
        }
      }
  
      return [positiveCount, negativeSum];
    }
  }
  

//Convert string to an array
function stringToArray(string){
    return string.split(' ');
  }

//SUM OF POSITIVE 
function positiveSum(arr) {
    if (arr === null || arr.length === 0) {
      return 0;
    } else {
      let positiveSum = 0;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
          positiveSum += arr[i];
        }
      }
      return positiveSum;
    }
  }
  
