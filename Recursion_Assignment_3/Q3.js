// take n find fib upto nth term, then filter prime out of that and then difference of prime and sum it up

var arr=[];

// Fib series
function fib(n) {
    if (n <= 1) {
      return [0,1];
    } 
    else {
      arr = fib(n - 1);
      arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
      return arr.slice(0, n);
    }
  };

  var n=1001;
  fib(n);
  console.log(arr);


  // Prime
  var prime=arr.filter((n) => {
    if(n==1||n==0){
      return false;
    }
    for (var i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
});
console.log(prime);

// Difference
function Difference(prime) {
  let diff = [];
  for (let i = 1; i < prime.length; i++) {
    diff.push(prime[i-1] - prime[i]);
  }
  return diff;
}
var d=Difference(prime);
console.log(d);

// Sum up all differences
function Add(d){
  let sum=0;
  for(let i of d){
    sum+=i;
  }
  return sum;
}
let finalSol=Add(d);
console.log((-1)*finalSol);

