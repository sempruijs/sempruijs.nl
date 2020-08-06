function GenerateElement(kindElement, classForElement, content, appendIn) {
    let element = document.createElement(kindElement);
    element.className = classForElement;
    element.innerHTML = content;
    appendIn.appendChild(element);
}

function GenerateButton(kindElement, classForElement, content, href, appendIn) {
    let element = document.createElement(kindElement);
    element.className = classForElement;
    element.innerHTML = content;
    element.href = href;
    appendIn.appendChild(element);

}