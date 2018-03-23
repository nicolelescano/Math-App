var button = document.getElementById("solve");
button.addEventListener("click", () => {
    document.getElementById("solution").textContent = solve()
});

function solve(a, b, c)
var a =
    var b =

        var result1 = ((-1 * b) - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * c)
var result2 = ((-1 * b) + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * c);
if (isNaN(a || b || c)) {
    changeElementClass("solutions", "invaild");
    return "You have entered an incorrect value. Please try again.";
} else if (isNaN(result1 + result2)) {
    changeElementClass("solutions", "no real");
    return "There are no solutions";
} else {
changeElementClass("solutions", "real");
    return "The root of the quardatic is " + result1 " and "result2".";


}
