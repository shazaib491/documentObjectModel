export const Image=()=>{
    const div=document.createElement("div")
    const divElement=document.createTextNode("");
    div.appendChild(divElement)
    div.setAttribute("id","demo")
    document.body.appendChild(div)

    const thirdElement = document.createElement("img")
    thirdElement.style = "border:5px solid black"
    thirdElement.classList.add("img-rounded-border")
    thirdElement.src = "https://picsum.photos/200/300"
    document.getElementById("demo").appendChild(thirdElement)
}