// Storing and displaying all element of array using Recursion (n=10)

let arr=[1,2,3,4,5,6,7,8,9,10];
let newArr=[];


// Storing all the elements of arrays
function StoreArr(arr, i, newArr) {
    if (i === arr.length) return newArr;
    newArr.push(arr[i]);
    return StoreArr(arr, i + 1, newArr);
}

StoreArr(arr, 0, newArr);
console.log("Stored in New Array:"+newArr);

// Display all elements of array using Recursion 
function display(arr){
    if(arr.length==0){
        return ;
    }
    else
        var x=arr.shift();
console.log(x);
display(arr);
}

x=display(arr);