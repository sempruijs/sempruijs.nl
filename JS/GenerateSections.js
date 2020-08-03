const sectionDataUrl = "./Data/SectionData.json"

function makeAjaxCall(methodType, url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open(methodType, url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            callback(xhr.response);
        }
    }
    xhr.send();
}

function renderSectionData(jsonString) {
    var sectionData = JSON.parse(jsonString);

    
    let sectionContainer = document.getElementById("SectionContainer"); 
    // document.getElementById("SectionContainer").appendChild(sectionDiv);

    sectionData.sections.forEach(section => {
        let sectionDiv = document.createElement("Section");
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

makeAjaxCall("GET", sectionDataUrl, renderSectionData);
