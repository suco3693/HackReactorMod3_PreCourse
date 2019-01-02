
/*
Examples :
detectOutlierValue("2 4 7 8 10"); // => 3 - Third number is odd, while the rest of the numbers are even
detectOutlierValue("1 10 1 1");  //=> 2 - Second number is even, while the rest of the numbers are odd
*/
//input is a string
//turn it into an array of numbers
//run through list of numbers 
//determine if the number is even or odd
//determine which is the outlier so which is odd when all others are even or which is even when all are odd
//add 1 to index

function detectOutlierValue(inputString){
  var inputArray=inputString.split(" ");
  var evenArray=[];
  var oddArray=[];
  var outlierIndex;
  for(var i =0;i<inputArray.length;i++){
    if(inputArray[i]%2===0){
      evenArray.push(inputArray[i]);
    }else{
      oddArray.push(inputArray[i]);
    }
  }
  if(evenArray.length ===1){
    //outlier is even
    for(q=0;q<inputArray.length;q++){
      if(evenArray[0]===inputArray[q]){
        outlierIndex=q;
      }
    }
  }else if(oddArray.length === 1){
    //outlier is odd
 
    for(q=0;q<inputArray.length;q++){
      if(oddArray[0]===inputArray[q]){
        outlierIndex=q;
      }
    }
  }else{
    return 'Error over one outlier'
  }
  return (outlierIndex+1);
}



//Test Function

function assertEqual(actual,expected,testCase){
  if(actual===expected){
    console.log('Passed ['+testCase+']');
  }else{
    console.log('Failed ['+testCase+'] Expected '+expected+' Got '+actual);
  }
}


//Test Cases
assertEqual(detectOutlierValue("2 4 7 8 10"),3,"If outlier is odd");
assertEqual(detectOutlierValue("1 10 1 1"),2,"If outlier is even");