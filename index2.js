import { ancor } from "./Ancor.js";
import { heading } from "./Heading.js";
import { Image } from "./Image.js";
import { para } from "./Paragraph.js";


const content = `
Lorem ipsum dolor sit amet consectetur adipisicing elit. Et tempore veniam alias deleniti saepe. Non rem, consequuntur deleniti veritatis sunt perspiciatis dolorem eos rerum accusantium, assumenda aut nam! Maiores, voluptatum.
`
const custom = () => {
    heading()
    Image()
    para(content)
    ancor()







    // const fourthElement = document.createElement("h2")
    // fourthElement.style = ""
    // const fourthElementContent=document.createTextNode(" lorem ipsum")
    // fourthElement.appendChild(fourthElementContent)
    // document.body.appendChild(fourthElement)






}

export { custom }