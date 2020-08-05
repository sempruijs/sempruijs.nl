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
    })
}

// makeAjaxCall("GET", projectDataUrl, renderProjectData);
makeAjaxCall("GET", projectDataUrl, renderProjectData);