import { getHtmlPageName } from "./getHtmlPageName";

const createListItems = (pages, currentHtml) => {
  
  const listItemsArray = pages.map(
    (page) => `
        <li
          class="nav-item"          
          style="display: ${page.visible ? "list-item" : "none"}"
        > 
          <a 
            class="nav-link ${
              getHtmlPageName(page.url) === currentHtml ? "active" : ""
            }" 
            href="${page.url}"
            > 
            ${page.icon} ${page.name} 
            </a>            
        </li>
    `
  );

  return listItemsArray.join("");
};

export { createListItems };
