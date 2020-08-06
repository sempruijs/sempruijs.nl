const sectionDataUrl = "./Data/SectionData.json"

function renderSectionData(jsonString) {
    let sectionData = JSON.parse(jsonString);
    
    let sectionContainer = document.getElementById("SectionContainer"); 

    sectionData.sections.forEach(section => {
        //Generate container for content
        let sectionDiv = document.createElement("Section");
        sectionContainer.appendChild(sectionDiv);
        
        //generate title
        GenerateElement("section", "section__title", section.Title, sectionDiv);

        //Create content container
        let contentContainer = document.createElement("div");
        contentContainer.className = "section__content";
        sectionDiv.appendChild(contentContainer);
        
        //Sets content
        section.Content.forEach(content => {
            GenerateElement("p", "", content.contentText, contentContainer);
        })
        
        //Make button
        GenerateButton("a", section.ButtonClass, section.ButtonContent, section.ButtonHref, sectionDiv);
    })
}

//Called from MakeAjaxCall.js
makeAjaxCall("GET", sectionDataUrl, renderSectionData);
