// onSubmit ->data get
// let title = document.getElementById("title");
// let body = document.getElementById("body");
let mode = "insert";

let blog = [];
// curd application
// insert operation
let a = 2
let b = 14
let c=3
if(a&&b>c){
    console.log("dfnsdkafkn")
}else{
    console.log("dfsdg")
}
// let sum="first no is \n"+no+"Second no is \n"+no3+"sum of this number \n"+no+no3
// console.log(sum)
// template literal
// let sum = `
// first no ${no}
// Second no ${no3}
// sum of no is ${no + no3}`
// console.log(sum)




function save() {
    // event -> target 
    // collection current form dom

    // native property
    event.preventDefault();//stop refreshing the page


    // if (mode == 'insert') {
    // insert operation

    console.log(event.target) //form submit extra information
    let blogs = {
        title: event.target.title.value,
        body: event.target.body.value
    }
    blog.push(blogs);
    event.target.reset() // resting form value
    console.log(blog)
    // } else {
    // update operation
    // const index = blog.findIndex((index) => index.title === event.target.title.value)
    // blog[index] = {
    //     title: event.target.title.value,
    //     body: event.target.body.value
    // }
}

// for(let j=0; j<=blog.length-1; j++){
//     console.log(blog[j])
// }
// display()
// }

// function name(name,email,pass)


// anonymous function =>the function which has no name
// let yash = function () {
//     console.log("sonali")
// }
// yash()

// fat arrow function
// let name=(nm)=>{
//     console.log(nm)
// }

// name("yash bawsar")


// wap to input any two no find the greatest number bw them also find the square of the
// greatest number

// pass somthing return somthing
// is used to perform specific task or operation

function (param) {  }

function greatest(a, b) { //param recieve
    if (a > b) {
        return a * a;
    } else {
        return b * b;
    }
}

let square = greatest(10, 20) // argument pass 
let square2 = greatest(50, 100) // argument pass 
console.log(square2 - 9000);


// type 2 pass somthing return nohting
function printf(naaam) {
    console.log(naaam)
}

let name = printf("bagera")
console.log(name)














// console.log(name)




// pass somthing return somthing 
// pass nothing return nothing
// pass somthing return nothing
// pass nohting return nothing

















// display operation
// function display() {
//     if (blog.length > 0) {
//         document.getElementById("root").innerHTML = "";
//         blog.forEach(element => {
//             document.getElementById("root").innerHTML += `
//             <tr>
//             <td>${element.title}</td>
//             <td>${element.body}</td>
//             <td>
//                 <button class="btn btn-primary" onclick="edit('${element.title}')">Edit</button>
//                 <button class="btn btn-danger" onclick="deleteElement('${element.title}')">delete</button>
//             </td>
//             </tr>
//             `
//         });
//     } else {
//         document.getElementById("root").innerHTML = "No Record Found"
//     }
// }

// display();
// update operation
const edit = (task) => {
    const editedElement = blog.find((element) => element.title === task)
    title.value = editedElement.title;
    body.value = editedElement.body;
    mode = "edit";
}

// delete operation
const deleteElement = (title) => {
    blog = blog.filter((elem) => elem.title !== title);
    display()
}