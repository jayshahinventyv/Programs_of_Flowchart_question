let num=prompt("Enter the number which is atleast 4 digit:");

const finalArr = generateNumbers(num);
// P&C
function generateNumbers(num) {
    const digits = num.toString().split('');
    const result = [];

    function permute(nums, path = []) {
        if (path.length > 0 && parseInt(path.join('')) !== num) {
            result.push(parseInt(path.join('')));
        }

        if (path.length === digits.length) {
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            const newNums = nums.filter((_, index) => index !== i);
            path.push(nums[i]);
            permute(newNums, path);
            path.pop();
        }
    }

    permute(digits);
    return result.filter((n, index) => result.indexOf(n) === index); // Remove duplicates if any
}
// console.log(finalArr)

// Prime from finalArr
let primeArr=[];
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function storePrimes(elements) {
    const primeNumbers = elements.filter((num) => isPrime(num));
    return primeNumbers;
}

// Storing prime numbers in a separate array
primeArr = storePrimes(finalArr);
console.log(primeArr);



// Pascal Triangle
  function generateCenteredPascalsTriangle(limit, combinations) {
    const triangle = [];
    let triangleHTML = '';

    for (let i = 0; i < limit; i++) {
      triangle[i] = [];
      for (let j = 0; j <= i; j++) {
        if (j === 0 || j === i) {
          triangle[i][j] = 1;
        } else {
          triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
        }
      }

      const tabs = '\t'.repeat((limit - i - 1)); // Adjust the multiplier for tab spacing
      const rowValues = triangle[i];

      let centeredRow = '';
      for (let k = 0; k < rowValues.length; k++) {
        centeredRow += `${rowValues[k]}\t\t`;
        if (isPrime(rowValues[k]) && combinations.includes(rowValues[k])) {
          centeredRow = centeredRow.replace(`${rowValues[k]}\t\t`, `<span class="prime">${rowValues[k]}</span>\t\t`);
        }
      }

      triangleHTML += `${tabs}${centeredRow}\n`;
    }

    document.getElementById('pascalsTriangle').innerHTML = triangleHTML;
  }

//   const num = prompt("Enter a 4-digit number:");
//   const combinations = generateCombinations(inputNumber);
  const limit = 15; // Change this limit as needed (up to 15 rows)
  generateCenteredPascalsTriangle(limit, primeArr);