function populateDivRight(div) {
    // Initially h1 set to All as that is the selected option
    const h1Elem = document.createElement("h1");
    h1Elem.textContent = "All";
    div.appendChild(h1Elem);

    // div element containing all the todo for the currently selected option
    const divToDos = document.createElement("div");
    divToDos.classList.add("todo-list");
    div.appendChild(divToDos);
}

function populateDivLeft(div) {
    // All
    const h2All = document.createElement("h2");
    h2All.textContent = "All";
    h2All.classList.add("selection-option");
    div.appendChild(h2All);
    
    // Today
    const h2Today = document.createElement("h2");
    h2Today.textContent = "Today";
    div.appendChild(h2Today);

    // Week
    const h2Week = document.createElement("h2");
    h2Week.textContent = "Week";
    div.appendChild(h2Week);

    // Line separator
    div.appendChild(document.createElement("hr"));

    // Projects with add button
    const divProjectsHeader =  document.createElement("div");
    const h1Projects = document.createElement("h1");
    h1Projects.textContent = "Projects";
    divProjectsHeader.appendChild(h1Projects);
    const projectAddBtn = document.createElement("button");
    projectAddBtn.textContent = "Add Project";
    projectAddBtn.type = "button";
    projectAddBtn.classList.add("add-project-btn");
    divProjectsHeader.appendChild(projectAddBtn);
    div.appendChild(divProjectsHeader);

    // div element containing actual projects
    const divAllProjects = document.createElement("div");
    const defaultProject = document.createElement("h2")
    defaultProject.textContent = "Default";
    defaultProject.setAttribute("id", "default-project");
    divAllProjects.classList.add("all-projects");
    div.appendChild(divAllProjects);
}

function populateHeader(header) {
    // h1
    const h1Elem = document.createElement("h1");
    h1Elem.textContent = "Todo List";
    header.appendChild(h1Elem);

    // add todo button
    const todoBtn = document.createElement("button");
    todoBtn.textContent = "Add";
    todoBtn.type = "button";
    header.appendChild(todoBtn);
}

function setupHeader(parent) {
    const headerElem = document.createElement("header");
    populateHeader(headerElem);
    parent.appendChild(headerElem);
}

function setupMain(parent) {
    const mainElem = document.createElement("main");
    
    // left section
    const divLeft = document.createElement("div");
    divLeft.classList.add("left-section");
    populateDivLeft(divLeft);
    mainElem.appendChild(divLeft);

    // right section
    const divRight = document.createElement("div");
    divRight.classList.add("right-section");
    populateDivRight(divRight);
    mainElem.appendChild(divRight);

    parent.appendChild(mainElem);
}

function setupFooter(parent) {
    const footerElem = document.createElement("footer");
    footerElem.innerHTML = "<p>Copyright &copy; Anabil Hoque</p>";
    parent.appendChild(footerElem);
}

function load() {
    const contentContainer = document.querySelector("#content");
    setupHeader(contentContainer);
    setupMain(contentContainer);
    setupFooter(contentContainer);
}

export { load };