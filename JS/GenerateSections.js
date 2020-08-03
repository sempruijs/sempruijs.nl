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

    let sectionContainer = document.createElement("Section");
    document.getElementById("SectionContainer").appendChild(sectionContainer);

    sectionData.sections.forEach(section => {
        let section__content = document.createElement("div");
        section__content.className = "section__content"
        section__content.innerHTML = section.Content;
        sectionContainer.appendChild(section__content);
    })
}

makeAjaxCall("GET", sectionDataUrl, renderSectionData);
