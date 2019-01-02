/*
Instructions from your teacher:
Ok by now you know the drill on how to set up and do these videos, so we won't repeat the giant list of instructions.

Give yourself 20 minutes for this problem.  

Don't be too fancy. Just lay out enough plan to get your ideas down, then assemble your solution, step by step.

Note: Don't submit code that doesn't reflect what you did in the allotted time.  You can put a belatedly-complete solution in a *private* Github Gist instead and link to that if you really want to share it here.

Starter Code :
/*
Problem description (de-obfuscate with ROT-13 as usual).

Given a list of non-negative integers and a target sum, find a pair of numbers that sums to the target sum.

Example:

var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair); // --> [4, 5]

problem
-given a list of numbers determine which two sum to a given number
-- all numbers are positive

Process
-for loop through the array of values
-take the given number to sum to and minus the value of the array from it
-if that value is not negatiave run through the rest of the array and see if any values equal that difference
-index up one stop in array and repeat
*/
var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair); // --> [4, 5]
function findPairForSum(inputArray,sumedValue){
  var difference;
  var output=[];
  //for loop through the array of values
  for(var i=0;i<inputArray.length;i++){
    difference=sumedValue-inputArray[i];
    if(notNegative(difference)){
      //if that value is not negatiave run through the rest of the array and see if any values equal that difference
      for(var q=i;q<inputArray.length;q++){
        if(inputArray[q]===difference){
          output.push(inputArray[i]);
          output.push(inputArray[q]);
          return output;
        }
      }
    }
  }
  return 'No pair found';//if no pairs are found
}

function notNegative(value){
  return value>=0;
}

//Test Function
function assertEqual(actual,expected,testCase){
  var actualString=actual.stringify;
  var expectedString=expected.stringify;
  if(actualString===expectedString){
    console.log('Passed ['+testCase+']');
  }else{
    console.log('Failed ['+testCase+'] Expected '+expected+' Got '+actual);
  }
}

//Test Cases
assertEqual(findPairForSum([3, 34, 4, 12, 5, 2], 9),[4, 5],'Given Test Case');
assertEqual(findPairForSum([0, 34, 4, 12, 5, 2], 12),[0, 12],'Given Test Case');
assertEqual(findPairForSum([0, 34, 4, 12, 5, 2], 11),'No pair found','Given Test Case');
assertEqual(notNegative(-10),false,"Test is negative number input intop notNegative gives a actual false");