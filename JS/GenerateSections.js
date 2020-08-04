const sectionDataUrl = "./Data/SectionData.json"

function renderSectionData(jsonString) {
    var sectionData = JSON.parse(jsonString);
    
    let sectionContainer = document.getElementById("SectionContainer"); 

    sectionData.sections.forEach(section => {
        //Create container for content
        let sectionDiv = document.createElement("Section");
        
        //Spawns container
        sectionContainer.appendChild(sectionDiv);
        
        //Create element
        let title = document.createElement("div");
        let content = document.createElement("div");
        
        //Set class
        title.className = "section__title";
        content.className = "section__content";
        
        //Set text
        title.innerHTML = section.Title;
        content.innerHTML = section.Content;
        
        //Spawn element
        sectionDiv.appendChild(title);
        sectionDiv.appendChild(content);
    })
}

//Called from MakeAjaxCall.js
makeAjaxCall("GET", sectionDataUrl, renderSectionData);
