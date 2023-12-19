// Storing and displaying all element of array using Recursion (n=10)

let arr=[1,2,3,4,5,6,7,8,9,10];

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