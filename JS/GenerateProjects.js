const projectDataUrl = "../Data/ProjectsData.json"

function renderProjectData(jsonString) {
    let projectData = JSON.parse(jsonString);

    let projectsContainer = document.getElementById("ProjectsContainer");
    
    projectData.Projects.forEach(Project => {
        //Make project section
        let projectSection = document.createElement("section");
        projectsContainer.appendChild(projectSection);
        
        //Generate title and content
        GenerateElement("div", "projects__title", Project.Title, projectSection);
        GenerateElement("div", "projects__content", Project.Content, projectSection);
        
        //Generate buttons
        Project.Buttons.forEach(Button => {
            let TheButton = document.createElement("a");
            TheButton.className = Button.ButtonClass;
            TheButton.href = Button.ButtonHref;
            TheButton.innerHTML = Button.ButtonText;
            projectSection.appendChild(TheButton);
        })
    })
}

// makeAjaxCall("GET", projectDataUrl, renderProjectData);
makeAjaxCall("GET", projectDataUrl, renderProjectData);