const fun2=(firstEle,...arr)=>{
    var arr2=[6,7,8,9];
    arr2.unshift(firstEle);
    // console.log(arr2);
    arr2=[...arr2,...arr];
    console.log(arr2);

    const promise=new Promise((resolve,reject)=>{
        var x=0;
        x=arr2.reduce((accumulator, currentValue) => accumulator + currentValue,x);
        if(x>30){
            resolve(x);
        }
        else{
            reject(x);
        }
    });
    promise.then((item) => {
        fetch(`https://picsum.photos/v2/list?limit=${item}`)
        .then(res => res.json())
        .then(value => {
            const image=value.map(item => item.download_url);
            console.log(value);
            console.log(image);
            return image;

        })
      }).catch((error) => {
       alert(error)
      });
}



(function fun1(){
    var arr1=[1,2,3,4,5];

    var firstEle;

// removing the first element and assigning to first element
    firstEle=arr1.shift();
    console.log(firstEle);
    fun2(firstEle,...arr1);
})();


