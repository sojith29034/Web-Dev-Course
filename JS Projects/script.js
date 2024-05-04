// BMI Calculator
function bmiCalculator (weight, height) {
    var bmiValue = Math.round(weight / (height*height));
    
    if(bmiValue<18.5){
        var interpretation = "Your BMI is "+bmiValue+", so you are underweight.";
    }
    if(bmiValue>18.5 && bmiValue<=24.9){
        var interpretation = "Your BMI is "+bmiValue+", so you have a normal weight.";
    }
    if(bmiValue>24.9){
        var interpretation = "Your BMI is "+bmiValue+", so you are overweight.";
    }
    
    return interpretation;
}

/* ---------------------------------------------------------------------------------------------------------------------------------------- */

// Leap Year
function isLeap(year) { 
    if(year%4===0){
        if(year%400===0){
            console.log("Leap year.");
        }
        else{
            if(year%100===0){
                console.log("Not leap year.");
            }
            else{
                console.log("Leap year.");
            }
        }
    }else{
        console.log("Not leap year.");
    }
}

// OR

// Leap Year
function isLeap(year) { 
    if(year%4===0){
        if(year%100===0){
            if(year%400===0){
                console.log("Leap year.");
            }
            else{
                console.log("Not leap year.");
            }
        }
        else{
            console.log("Leap year.");
        }
    }else{
        console.log("Not leap year.");
    }
}

/* ---------------------------------------------------------------------------------------------------------------------------------------- */

// Fibonacci Series
function fibonacciGenerator (n) {
    var a=[];
    if(n===1){
        a=[0];
    }
    else if(n===2){
        a=[0,1];
    }
    else if(n>2){
        a[0]=0;
        a[1]=1;
        for(var i=2;i<n;i++){
            a.push(a[i-1]+a[i-2]);
        }
    }
    else{
        console.log("Enter a valid number.");
    }
    return a;
}
    
    