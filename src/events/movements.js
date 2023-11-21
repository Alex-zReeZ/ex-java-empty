// noinspection JSVoidFunctionReturnValueUsed

/**
 * Register a new event listener that will retrieve the position of the mouse on the screen
 * and display the coordinates on the p with id "mouse-coordinates".
 * You need to display coordinates as follows : "x: 232, y: 332
 */
export function mouseMovements() {
    let mousePositionElement = document.getElementById("mouse-coordinates");

    document.addEventListener("mouseover", function(event) {
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        mousePositionElement.textContent = "x: " + mouseX + ", y: " + mouseY;
    });
}

/**
 * On the page, you have an input with the id "focus-me".
 * You need to add three behaviors to this input.
 * First, when you hover it, you have to display a message in his label with
 *        the text "Yes, you hover me !". and remove the message when the hover is loosed.
 * Second, when you focus the input, you have to change hist border color to a random one,
 *         but different from all the previously used and different from the original one.
 * Third, when you loose focus of the field, you need to reset the border color to the default one.
 */
export function hoverFocusAndBlur() {
  let focusMe = document.getElementById("focus-me");
  focusMe.addEventListener("mouseover", function (event) {
      if (focus(focusMe) === true) {
          focusMe.taget.style.color = '#'+(Math.random()*0xFFFFFF<<0).toString(16)


      }
  })

}

/**
 * On the same input from the previous exercise, you need to add a new behavior :
 * Now, each new letter on the input should randomly change the default color of the input border.
 * You don't need to change the current border color, which is controlled by the previous exercise,
 * but you need to change the original color, the one that will be applied when the
 * precedent exercise will lose focus of the field.
 * Take the opportunity to also apply this colour to the text of the 2 input labels.
 */
export function changesOnInputEvents() {
  //
}
