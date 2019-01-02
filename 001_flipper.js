
var input = 'check out how interesting this problem is, it\'s insanely interesting!';
var output = flipPairs(input);
//console.log(output); // --> hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!


//flips every two char includes spaces
//last char seem to be same 

function flipPairs(input){
  //input string
  //flip every two characters
  //console.log(input.length); out length
  var output='';
  if(isEven(input)){
    for(var i =0;i<input.length;i=i+2){
      for(var q=1;q>=0;q--){
        output +=input[i+q];   //1,0,3,2,5,4
      }
    }
  }else{
     for(var i =0;i<input.length-1;i=i+2){
       for(var q=1;q>=0;q--){
         output +=input[i+q];   //1,0,3,2,5,4
       }
    }
    output +=input[input.length-1]; // add last digit of input if string is odd
  }
 
  //end of string condition is
  //output string of flipped character
  return output;
}

function isEven(string){
  return string.length%2===0;
}

//Test Function
function assertEqual(actual,expected,testCase){
  //is true
  if(actual === expected){
    console.log('Passed ['+testCase+']');
  //if false  
  }else{
    console.log('Failed ['+testCase+'] Expected \n'+expected+'\nGot\n'+actual);
  }
}

//Test Cases
var expected= 'hcce kuo toh wnietertsni ghtsip orlbmei ,si \'t sniasenyli tnreseitgn!';
assertEqual(flipPairs(input),expected,'Base case given in problem');

var evenInput ='Even two';
var evenExpected= 'vEnet ow';
assertEqual(flipPairs(evenInput),evenExpected,'Base case if even number of char');