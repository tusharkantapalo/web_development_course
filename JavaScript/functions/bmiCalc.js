function bmiCalculator(weight, height)
{
    return Math.round(weight / Math.pow(height, 2));
}


var bmi = bmiCalculator(prompt("Enter your weight in kg: "), prompt("Enter your height in meters: "));

console.log("Your BMI is " + bmi);