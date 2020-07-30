var StyleSheets = [
    "StyleSheet/Green.css",
    "StyleSheet/Purple.css",
    "StyleSheet/Orange.css"
];

var randomItem = StyleSheets[Math.floor(Math.random()*StyleSheets.length)];

window.onload = function () {
    document.getElementById('stylesheet').href = randomItem.toString();
}