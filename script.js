function calculateBMI() {
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;

    height = height / 100; // converting cm to m

    var bmi = weight / (height * height);
    document.getElementById("result").innerHTML = "Your BMI is: " + bmi.toFixed(2);
}