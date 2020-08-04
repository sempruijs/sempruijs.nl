const sectionDataUrl = "./Data/SectionData.json"

function renderSectionData(jsonString) {
    let sectionData = JSON.parse(jsonString);
    
    let sectionContainer = document.getElementById("SectionContainer"); 

    sectionData.sections.forEach(section => {
        //Create container for content
        let sectionDiv = document.createElement("Section");
        
        //Spawns container
        sectionContainer.appendChild(sectionDiv);
        
        //Create element
        let title = document.createElement("div");
        let contentContainer = document.createElement("div");
        
        //Set class
        title.className = "section__title";
        contentContainer.className = "section__content";
        
        //Set text
        title.innerHTML = section.Title;
        
        //Spawn element
        sectionDiv.appendChild(title);
        sectionDiv.appendChild(contentContainer);
        
        //Sets content
        section.Content.forEach(content => {
            let contentText = document.createElement("p");
            contentText.innerHTML = content.contentText;
            contentContainer.appendChild(contentText);
        })
        
        //Make button
        let button = document.createElement("a");
        button.className = section.ButtonClass;
        button.href = section.ButtonHref;
        button.innerHTML = section.ButtonContent;
        sectionDiv.appendChild(button);
    })
}

//Called from MakeAjaxCall.js
makeAjaxCall("GET", sectionDataUrl, renderSectionData);
