var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
// enum Color {
//   Red = 1, Green = 2, Blue = 3
// }
let c = Color.Blue;
let b = Color[2];
console.log(c);
console.log(b);
//# sourceMappingURL=Enum.js.map