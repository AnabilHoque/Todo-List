function load() {
    const contentContainer = document.querySelector("#content");

    // h1
    const h1Elem = document.createElement("h1");
    h1Elem.textContent = "Todo List";

    contentContainer.appendChild(h1Elem);
}

export { load };