function bmiCalculator (weight, height) {
    weight = parseFloat(document.querySelector(weight).value);
    height = parseFloat(document.querySelector(height).value);

    var bmiValue = Math.round(weight / (height*height));
    var interpretation;

    if(bmiValue<18.5){
        interpretation = "Your BMI is "+bmiValue+", so you are underweight.";
    }
    if(bmiValue>18.5 && bmiValue<=24.9){
        interpretation = "Your BMI is "+bmiValue+", so you have a normal weight.";
    }
    if(bmiValue>24.9){
        interpretation = "Your BMI is "+bmiValue+", so you are overweight.";
    }
    
    document.querySelector(".result").innerHTML=interpretation;
}