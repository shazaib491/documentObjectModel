// const heading=document.getElementById("demo");
// heading.style="color:red;background-color:pink"


// function changeColor(){
//     heading.style="color:pink;background-color:red"
// }

let no = 20;
let no2 = 30;
// let no3="first no is \n"+no+"Second no is "+no2+" \t"+" sum of this no is "+parseInt(no+no2)
// template literal
// let a=`hello wolrd`
// console.log(typeof(a))
// let no4=`first no is ${no} \n second no is ${no2} \n sum of this no is ${no+no2}`
// console.log(no3)
// console.log(no4)
const heading = document.querySelector(".head");
const inputI = document.querySelector("#demo")
const inputII = document.querySelector("#demo1")
heading.style = `color:red`

function clickme() {
    heading.style = "background-image:url(https://picsum.photos/200/300)"
}

const user = {
    name: "",
    email: ""
}
function changer() {
    user.name = inputI.value

}

function changer2() {
    user.email = inputII.value
}

function submit() {
    console.log(user)
}


function displaySum(answer) {
    console.log(answer)
}

function sum(sums) {
    // let c=prompt("Enter number");
    // sums(c)
    console.log("completed")
}

sum(displaySum)

let click = document.querySelector("#clicked");
let name, emai, password;
let arr = [];
click.addEventListener('submit', (e) => {
    e.preventDefault();
    name = e.target.name.value;
    email = e.target.email.value;
    password = e.target.password.value;
    arr.push({ name, email, password })
    click.reset();
    console.log(arr)
    myfunc();
})

function myfunc() {
    document.getElementById("root").innerText = `
        ${arr.map((e) => {
        return `
            <li>${e.name}</li>
            <li>${e.email}</li>
            <li>${e.password}</li>
            `
    })}
    `
}
// const saved = () => {
//     event.preventDefault();
//     console.log(event)
//     console.log(event.target[0].value)
// }
