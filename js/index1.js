// insert display update delete
// calling ids
let name=document.getElementById("name");
let body=document.getElementById("body");
// saving data
// array store data
let blogs = [];


// regular function 
function save() {
    // browser stop refresh
    event.preventDefault();
    // onsubmit browser return event addiotional information current event
    let title = event.target.title.value;
    let body = event.target.body.value;
    const blog = {
        title: title,
        body: body
    }
    blogs.push(blog);
    event.target.reset()
    display()
}






// display data 
function display() {


    // loop execute 0 second 1 third 2+3+4+5 
    // doc
    // console.log(blogs)
    document.getElementById('root').innerHTML = " "; //blank

    blogs.forEach((element) => {
        // template literal
        // innerHTML text and element add
        // template literal
        document.getElementById('root').innerHTML += `
                <tr>
                    <td>${element.title}</td>
                    <td>${element.body}</td>
                    <td><button class="btn btn-primary" onclick="edit('${element.title}')" >Edit</button></td>
                    <td><button class="btn btn-danger" onclick="deletes('${element.title}')" >Delete</button></td>
                </tr>
        `
    })




}

display()

// edit function 
function edit(title) {
    const index=blogs.findIndex((element) => {
        return element.title === title
    })
    name.value=blogs[index].title;
    body.value=blogs[index].body;
    
}





// delete function
function deletes(title) {
    // filter array value filter
    blogs = blogs.filter((element) => {
        return element.title !== title
        // first title is not title 
    })
    // console.log(blogs)
    // first Title 
    // second Title
    // third Title
    display()
}






















// let no=10;
// let sum=0;
// for(let i=0; i<=no; i++){
//     sum+=no;
// }
// console.log(sum)