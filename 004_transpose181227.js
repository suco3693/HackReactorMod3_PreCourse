/*

Starter Code :


Problem description (see instructions for how to de-obfuscate).

You will be given an array that contains two strings. Your job is to create a function that will take those two strings and transpose them, so that the strings go from top to bottom instead of left to right.

e.g. transposeTwoStrings(['Hello','World']);

should return:
H W  
e o  
l r  
l l  
o d

input is array of string
transpose from left to right to top to bottom so that each char is on own line for each string
,but each line contains 1 char from each string

assumptions
// if string lengths are not equal then black space at end of smaller string
//black spaces could as characters
//no special characters are in strings

implementation
//for loop that goes through the length of the longest string 
//want to check length of strings then
//loop through strings putting 1 char from each string on a line so str1 str2 \n
//if out of char for new line (if lengths are not same) then put a black space
*/



function transposeTwoStrings(inputArray){
  //determine longer string length
  var lengthString1= inputArray[0].length;
  var string1=inputArray[0];
  var string2=inputArray[1];
  var lengthString2 = inputArray[1].length;
  var indexLength;
  var outputString='';
  if(lengthString1 >= lengthString2){
    indexLength=lengthString1;
  }else{
    indexLength=lengthString2;
  }
  for(var i=0;i<indexLength;i++){
    if(string1[i] !== undefined){
      outputString+=string1[i];
    }else{
      outputString +=' ';
    }
    outputString +=' ';
    if(string2[i] !== undefined){
      outputString+=string2[i];
    }else{
      outputString +=' ';
    }
    outputString+= '\n';
  }
  return outputString;
}

//Test function

function assertEqual(actual,expected,testCase){
  //if same
  if(actual === expected){
    console.log('Passed['+testCase+']');
  }else{
    //if false
    console.log('Failed ['+testCase+'] Expected: \n'+expected+'\nGot\n'+actual);
  }
}


//Test cASE
var expected='H W\n'+'e o\n'+'l r\n'+'l l\n'+'o d\n';
assertEqual(transposeTwoStrings(['Hello','World']),expected,'Hello Word test Case');

var unevenexpected='H W\n'+'e o\n'+'l r\n'+'l  \n'+'o  \n';
assertEqual(transposeTwoStrings(['Hello','Wor']),unevenexpected,'Hello Word test Case');