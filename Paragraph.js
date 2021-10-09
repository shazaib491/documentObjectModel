export const para = (prop) => {
    const secondElement = document.createElement("p");
    const secondElementContent = document.createTextNode(prop)
    secondElement.style="text-align:center;"
    secondElement.appendChild(secondElementContent)
    document.body.appendChild(secondElement)
}