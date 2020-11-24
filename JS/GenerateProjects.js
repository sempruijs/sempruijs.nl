const projectDataUrl = "../Data/ProjectsData.json"

function GenerateProjectData(jsonString) {
    clearProjectsContainer();
    
    let input = document.getElementById("SearchBar").value;

    console.log(input);
    
    let projectData = JSON.parse(jsonString);
    let projectsContainer = document.getElementById("ProjectsContainer");
    projectData.Projects.forEach(Project => {
        if (input === Project.Title || input === "") {
            console.log(input)
            //Make project section
            let projectSection = document.createElement("section");
            projectsContainer.appendChild(projectSection);

            //Generate title and content
            GenerateElement("div", "projects__title", Project.Title, projectSection);
            GenerateElement("div", "projects__content", Project.Content, projectSection);

            //Generate buttons
            Project.Buttons.forEach(Button => {
                GenerateButton("a", Button.ButtonClass, Button.ButtonText, Button.ButtonHref, projectSection);
            })   
        }
    })
}

function clearProjectsContainer() {
    document.getElementById("ProjectsContainer").innerHTML = "";
}

function renderProjectData() {
    makeAjaxCall("GET", projectDataUrl, GenerateProjectData);   
}

renderProjectData();