function sumOfDifferences(arr) {
    if(arr.length<=1)
      return 0
    arr=arr.sort((a,b)=>b-a)
    let sum=0
    
    for(let i=1;i<arr.length;i++)
      sum+=(arr[i-1]-arr[i])
    return sum
  }