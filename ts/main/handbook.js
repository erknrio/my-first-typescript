var listNum = [1, 2, 3];
var listAny = [1, true, "free"];
var myAnyType = 4;
myAnyType = 'I want a string';
myAnyType = false;
var listNumAlternative = [1, 2, 3];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log(c);
var ColorAlternative0;
(function (ColorAlternative0) {
    ColorAlternative0[ColorAlternative0["Red"] = 1] = "Red";
    ColorAlternative0[ColorAlternative0["Green"] = 2] = "Green";
    ColorAlternative0[ColorAlternative0["Blue"] = 3] = "Blue";
})(ColorAlternative0 || (ColorAlternative0 = {}));
;
var cAlt0 = ColorAlternative0.Green;
console.log(cAlt0);
var ColorAlternative1;
(function (ColorAlternative1) {
    ColorAlternative1[ColorAlternative1["Red"] = 1] = "Red";
    ColorAlternative1[ColorAlternative1["Green"] = 2] = "Green";
    ColorAlternative1[ColorAlternative1["Blue"] = 3] = "Blue";
})(ColorAlternative1 || (ColorAlternative1 = {}));
;
var colorName = ColorAlternative1[2];
console.log(colorName);
function warnUser() {
    alert("This is my warning message");
}
