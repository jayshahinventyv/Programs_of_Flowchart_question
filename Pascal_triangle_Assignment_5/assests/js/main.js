let num = prompt("Enter the number which is atleast 4 digit:");



const result = [];
function genNums(num) {
    const digits = num.toString().split('');

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
    return result.filter((n, index) => result.indexOf(n) === index); 
}
console.log(result)
// Checking Prime number
function isPrime(number) {
    if (number < 2)
        return false;

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

// Generating and Printing Pascal Triangle
function generatePascals(stopElement, primeNumbers, matched_elements) {
    let row = [1];
    let found = false;

    const outputContainer = document.getElementById('pascaltriangle');
    outputContainer.innerHTML = '';
    outputContainer.innerHTML += `<span class="text-element" style="margin-right: 0px;">${row}</span><br><br>`;
    while (!found) {
        if (!found) {
            const nextRow = [1];
            outputContainer.innerHTML += `<span class="text-element">1</span> `;


            for (let i = 1; i < row.length; i++) {
                nextRow[i] = row[i - 1] + row[i];
                let x = nextRow[i];

                if (x >= stopElement) {
                    found = true;
                }

                if (primeNumbers.includes(x)) {
                    matched_elements.push(x);
                    outputContainer.innerHTML += `<span class="text-element prime">${x}</span> `;
                }
                else {
                    outputContainer.innerHTML += `<span class="text-element">${x}</span> `;
                }
            }

            nextRow.push(1);
            row = nextRow;
        }

        outputContainer.innerHTML += `<span style="margin-right: 0px;" class="text-element">1</span><p></p>`;
    }
    document.getElementById('info').innerHTML+=`The number you entered : ${num}<hr>`
}



// Main function of calling all function
let matched_elements = [];
let missed_elements = [];

let arr = genNums(num);
arr = [... new Set(arr)];
console.log("Generated numbers:", arr);


const primeNumbers = arr.filter(isPrime);
console.log("Prime numbers:", primeNumbers);

const stopElement = Math.max(...primeNumbers);
console.log("Largest prime number:", stopElement);
generatePascals(stopElement, primeNumbers, matched_elements);


matched_elements = [... new Set(matched_elements)];
console.log("Matched elements:", matched_elements);


for (let i of primeNumbers) {
    if (!matched_elements.includes(i)) {
        missed_elements.push(i);
    }
}

console.log("Missed elements:", missed_elements);
// Calculation
document.getElementById('detail').innerHTML+=`<hr><b>Generated P&C :</b> ${result}<br/><br/>`
document.getElementById('detail').innerHTML+=`<b>Generated Prime number from generated P&C :</b> ${primeNumbers}<br/><br/>`
document.getElementById('detail').innerHTML+=`<b>Max Prime number :</b> ${stopElement}<br/><br/>`
document.getElementById('detail').innerHTML+=`<b>Matched Elements:</b> ${matched_elements}<br/><br/>`
document.getElementById('detail').innerHTML+=`<b>Missed Elements</b> ${missed_elements}<br/><br/>`
document.getElementById('detail').innerHTML+=`<b>Error Ratio :</b> ${((missed_elements.length/primeNumbers.length) * 100).toFixed(3)} %</p><br/><br/>`;

