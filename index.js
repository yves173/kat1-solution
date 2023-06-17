//1.

function joinStrings(string1, string2){
   // code here
  return`${string1} ${string2}`
}


//2.

function sumOfDifferences(arr) {
  if(arr.length<=1)
    return 0
  arr=arr.sort((a,b)=>b-a)
  let sum=0
  
  for(let i=1;i<arr.length;i++)
    sum+=(arr[i-1]-arr[i])
  return sum
}


//3.

function arrayPlusArray(arr1, arr2) {
  return arr1.reduce((a,b)=>a+b) + arr2.reduce((a,b)=>a+b); //something went wrong
}


//4.

lass SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
  }
}


//5.

lass SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
  }
}


//4. 

var Filter = function(value){
return parseInt(value.split('').filter((a) => !isNaN(parseInt(a))).join(''));
}
