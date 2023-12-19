// Combination nCr


function fact(n){
    if(n==1)
        return 1;
    else
        return n*fact(n-1);
}

 function combination(n,r){
    let sol=fact(n)/(fact(n-r)*fact(r));
    return sol;
}

function main(){
    var n=5,r=2;
    let ans=combination(n,r);
    console.log(ans);
}

main();
