import { navbar } from "./navbar";

const insertMainHeader = ( refDOMHeader )=>{     
     refDOMHeader.innerHTML =  navbar();
}

export {insertMainHeader};