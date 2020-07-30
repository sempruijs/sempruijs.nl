var StyleSheets = [
    "StyleSheet/MainStyleGreen.css",
    "StyleSheet/MainStylePurple.css",
    "StyleSheet/MainStyleOrange.css"
];

var randomItem = StyleSheets[Math.floor(Math.random()*StyleSheets.length)];

window.onload = function () {
    document.getElementById('stylesheet').href = randomItem.toString();
}