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
    let json = JSON.parse(jsonString)
    
    json.sections.forEach(section => {
        console.log("section" + JSON.stringify(section))
    })
}

makeAjaxCall("GET", sectionDataUrl, renderSectionData);
