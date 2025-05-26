import { welcome } from "./welcome";


const insertMainDOM = ( refDOMMainContent )=> {

    refDOMMainContent.innerHTML = welcome();


};

export { insertMainDOM };