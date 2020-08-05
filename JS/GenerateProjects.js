const projectDataUrl = "../Data/ProjectsData.json"

function renderProjectData(jsonString) {
    let projectData = JSON.parse(jsonString);

    let projectsContainer = document.getElementById("ProjectsContainer");

    projectData.Projects.forEach(Project => {
        let projectTitle = document.createElement("div");
        projectTitle.className = "projects__title";
        projectTitle.innerHTML = Project.Title;
        projectsContainer.appendChild(projectTitle);
    })
}

// makeAjaxCall("GET", projectDataUrl, renderProjectData);
makeAjaxCall("GET", projectDataUrl, renderProjectData);