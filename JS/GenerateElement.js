function GenerateElement(kindElement, classForElement, content, appendIn) {
    let element = document.createElement(kindElement);
    element.className = classForElement;
    element.innerHTML = content;
    appendIn.appendChild(element);
}