const projectDataUrl = "../Data/ProjectsData.json"

function renderProjectData(jsonString) {
    let projectData = JSON.parse(jsonString);

    let projectsContainer = document.getElementById("ProjectsContainer");
    
    projectData.Projects.forEach(Project => {
        //Make project section
        let projectSection = document.createElement("section");
        projectsContainer.appendChild(projectSection);
        
        //Generate title
        let projectTitle = document.createElement("div");
        projectTitle.className = "projects__title";
        projectTitle.innerHTML = Project.Title;
        projectSection.appendChild(projectTitle);
        
        //Generate content
        let content = document.createElement("div");
        content.className = "projects__content"
        content.innerHTML = Project.Content;
        projectSection.appendChild(content);
        
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