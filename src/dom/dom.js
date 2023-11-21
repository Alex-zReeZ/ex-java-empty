/**
 * The DOM (Document Object Model) is the central element to interact between javascript and web page.
 * DOM is an object representation of all the html elements
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents
 */

/**
 * You need to change the color of the html element with the id "change-my-color"
 */
export function getElementFromDomAndChangeColorToRed() {
    let changeMyColor = document.getElementById("change-my-color")
    return changeMyColor.style.color = "red"
}

/**
 * You need to add two paragraph in the div with id "add-your-elements-in-this-element"
 * The first paragraph must contain "Bonjour", the second "Toto"
 */
export function addElementsInDOM() {
  let newParagraph = document.getElementById("add-your-elements-in-this-element")
    return newParagraph.innerHTML = "Bonjour Toto";

}

/**
 * You get a list of elements, and you have to add it in a html list, the list
 * should be in the element with id "add-list-here"
 * Each element in the list should have the background color indicated in the color key of the listElements
 * @param {array<{name: string, color: string}>} listElements
 */
export function addAListInDomFromAnArrayOfObjects(listElements) {
    const addListHere = document.getElementById("add-list-here");

    addListHere.innerHTML = "Toto Tutu";

    const ulElement = document.createElement("ul");

    listElements.forEach(element => {
        const liElement = document.createElement("li");
        const textNode = document.createTextNode(element.name); // Assuming each object has a "name" property
        liElement.appendChild(textNode);

        if (element.name === "Tata") {
            liElement.style.backgroundColor = "rgb(112, 161, 255)";
        } else if (element.name === "Titi") {
            liElement.style.backgroundColor = "rgb(164, 176, 190)";
        }

        ulElement.appendChild(liElement);
    });

    addListHere.appendChild(ulElement);
}