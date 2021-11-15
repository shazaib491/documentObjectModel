// onSubmit ->data get
let title = document.getElementById("title");
let body = document.getElementById("body");

let blog = [];
// curd application
// insert operation

function save() {
    // event -> target 
    // collection current form dom
    event.preventDefault();//stop refreshing the page
    let blogs = { title: title.value, body:body.value }
    blog.push(blogs);
    // for(let j=0; j<=blog.length-1; j++){
    //     console.log(blog[j])
    // }
    blog.forEach(element => {
        console.log(element)
    });
}




// display operation
// function display(){

// }


// update operation


// delete operation
