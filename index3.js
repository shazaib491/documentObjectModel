// const heading=document.getElementById("demo");
// heading.style="color:red;background-color:pink"


// function changeColor(){
//     heading.style="color:pink;background-color:red"
// }

let no=20;
let no2=30;
// let no3="first no is \n"+no+"Second no is "+no2+" \t"+" sum of this no is "+parseInt(no+no2)
// template literal
// let a=`hello wolrd`
// console.log(typeof(a))
// let no4=`first no is ${no} \n second no is ${no2} \n sum of this no is ${no+no2}`
// console.log(no3)
// console.log(no4)
const heading=document.querySelector(".head");
const inputI=document.querySelector("#demo")
const inputII=document.querySelector("#demo1")
heading.style=`color:red`

function clickme(){
heading.style="background-image:url(https://picsum.photos/200/300)"
}

const user={
    name:"",
    email:""
}
function changer(){
    user.name=inputI.value
    
}

function changer2(){
    user.email=inputII.value
}

function submit(){
    console.log(user)
}


