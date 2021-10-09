export const heading = () => {
    const firstElement = document.createElement("h1");
    const firstElementContent = document.createTextNode("Hello how are you")
    firstElement.appendChild(firstElementContent)
    document.body.append(firstElement)
}

