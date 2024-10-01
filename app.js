//string
document.write("<br>")
var string = "Richard";
document.write("String Data Type " + string);
document.write("<br>")
//numerical
var number = 1;
document.write("Number Data Type" + number);
document.write("<br>")
//boolean
var boolean = true;
document.write("Boolean Data Type " + boolean);
document.write("<br>")
//object
var student = { name: "Matthew", grade: "1" }
document.write("Object Data Type " + student.name)
document.write("<br>")
//Random Numbers
var firstNumber = 45;
var secondNumber = 65;
var thirdNumber = 76;
var fourthNumber = 53;
var fifthNumber = 89;
var sum = firstNumber + secondNumber + thirdNumber + fourthNumber + fifthNumber;
document.write(sum);
function condition(){
    var text = document.getElementById("name").value;
    if (text == "Nisha") {
        window.alert("Hi Teacher")
    }
    else {
        window.alert("Hi Student")
    }
}

