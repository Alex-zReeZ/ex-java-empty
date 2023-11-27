/**
 * In javascript we can use the fetch function to make HTTP calls to the network
 * https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
 * In the next exercise, when the user clicks on the button with id "click-to-fetch"
 * you have to call this url : https://api.github.com/octocat
 * Then, you have to display the content returned by the api on the "pre" tag with id "display-here"
 */
export function fetchDataOnClick() {
    const getElement = document.querySelector("#click-to-fetch")
    const showHere = document.querySelector("#display-here")
    getElement.addEventListener("click", async () => {
        const request = await fetch("https://api.github.com/octocat")
        showHere.innerText = await request.text()
    })
}