// const sectionData = "../Data/SectionData.json"
const sectionData = "https://github.com/SemPruijs/sempruijs.nl/blob/LoadFromJSON/Data/SectionData.json"

function GeneratePage() {
    const response = fetch(sectionData);
    // const data = response.json();
    const {Title, content} = response;
    console.log(Title);
    console.log(content);
}

GeneratePage();

// window.onload = function () {
// }