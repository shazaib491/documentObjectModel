export const ancor = () => {
    const ancorElement = document.createElement("a");
    const ancorTagContent=document.createTextNode("Click me")
    ancorElement.appendChild(ancorTagContent)
    ancorElement.href = "www.google.com"

    document.body.appendChild(ancorElement)
}