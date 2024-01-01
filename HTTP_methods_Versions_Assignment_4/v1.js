// Read in http 1.1



function displayData(){

  fetch("http://localhost:3000/mobiles")
    .then((response) => response.json())
    .then((json) => console.log(json));
}


function postData(){
  fetch("http://localhost:3000/mobiles", {
        method: "POST",
        body: JSON.stringify({
            "id": 20,
            "title": "OnePlus Nord CE",
            "description": "An Andriod mobile",
            "price": 349,
            "discountPercentage": 5.96,
            "rating": 10,
            "stock": 10,
            "brand": "One Plus",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
            "images": [
                "https://i.dummyjson.com/data/products/1/1.jpg",
                "https://i.dummyjson.com/data/products/1/2.jpg",
                "https://i.dummyjson.com/data/products/1/3.jpg",
                "https://i.dummyjson.com/data/products/1/4.jpg",
                "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
            ]
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }).then(res => res.json())
    .then(json => console.log(json))
}

function deleteData(deleteID){
  fetch(`http://localhost:3000/mobiles/${deleteID}`, {
        method: "DELETE",
    }).then(res => res.json())
    .then(json => console.log(json))
}

function putData(updateID){
  fetch(`http://localhost:3000/mobiles/${updateID}`, {
        method: "PUT",
        body: JSON.stringify({
            "id": updateID,
            "title": "Jio",
            "description": "An Andriod mobile",
            "price": 349,
            "discountPercentage": 5.96,
            "rating": 10,
            "stock": 10,
            "brand": "One Plus",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
            "images": [
                "https://i.dummyjson.com/data/products/1/1.jpg",
                "https://i.dummyjson.com/data/products/1/2.jpg",
                "https://i.dummyjson.com/data/products/1/3.jpg",
                "https://i.dummyjson.com/data/products/1/4.jpg",
                "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
            ]
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }).then(res => res.json())
    .then(json => console.log(json))
}

function patchData(updateID){
  fetch(`http://localhost:3000/mobiles/${updateID}`, {
        method: "PATCH",
        body: JSON.stringify({
            "id": updateID,
            "title": "Jio",
            "description": "An Andriod mobile",
            "brand": "One Plus",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
            "images": [
                "https://i.dummyjson.com/data/products/1/1.jpg",
                "https://i.dummyjson.com/data/products/1/2.jpg",
                "https://i.dummyjson.com/data/products/1/3.jpg",
                "https://i.dummyjson.com/data/products/1/4.jpg",
                "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
            ]
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }).then(res => res.json())
    .then(json => console.log(json))
}
