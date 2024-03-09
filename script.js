function calculateBMI() {
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;
    var gender = document.querySelector('input[name="gender"]:checked').value;

    height = height / 100; // converting cm to m
    var bmi = weight / (height * height);
    
    var resultText = "Your BMI is: " + bmi.toFixed(2) + ". Category: ";

    if (gender === "male") {
        resultText += categorizeBMI(bmi);
    } else {
        resultText += categorizeBMI(bmi);
    }

    document.getElementById("result").innerHTML = resultText;
}

function categorizeBMI(bmi) {
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return "Normal weight";
    } else if (bmi >= 25 && bmi <= 29.9) {
        return "Overweight";
    } else if (bmi >= 30 && bmi <= 34.9) {
        return "Obese (Class I)";
    } else if (bmi >= 35 && bmi <= 39.9) {
        return "Obese (Class II)";
    } else {
        return "Obese (Class III)";
    }
}
