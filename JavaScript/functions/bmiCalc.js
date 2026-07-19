function bmiCalculator(weight, height)
{
    var bmi = weight / Math.pow(height, 2);
    
    if(bmi < 18.5) {
        return "Your BMI is " + bmi + ", so you are underweight.";
    } else if(bmi >= 18.5 && bmi <= 24.9) {
        return "Your BMI is " + bmi + ", so you have a normal weight.";
    } else if(bmi >= 24.9) {
        return "Your BMI is " + bmi + ", so you are overweight.";
    }
}

var msg = bmiCalculator(prompt("Enter your weight in kg: "), prompt("Enter your height in meters: "));

console.log(msg);
