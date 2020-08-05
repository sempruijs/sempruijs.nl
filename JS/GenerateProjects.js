const projectDataUrl = "../Data/ProjectsData.json"

function renderProjectData(jsonString) {
    let projectData = JSON.parse(jsonString);

    let projectsContainer = document.getElementById("ProjectsContainer");

    projectData.Projects.forEach(Project => {
        //Generate title
        let projectTitle = document.createElement("div");
        projectTitle.className = "projects__title";
        projectTitle.innerHTML = Project.Title;
        projectsContainer.appendChild(projectTitle);
        
        //Generate content
        let content = document.createElement("div");
        content.className = "projects__content"
        content.innerHTML = Project.Content;
        projectsContainer.appendChild(content);
    })
}

// makeAjaxCall("GET", projectDataUrl, renderProjectData);
makeAjaxCall("GET", projectDataUrl, renderProjectData);