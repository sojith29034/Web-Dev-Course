// Leap Year
function isLeapM1(year) { 
    year = parseInt(document.querySelector(year).value);
    var message;
    
    if(year%4===0){
        if(year%400===0){
            message = year + " is a Leap Year.";
        }
        else{
            if(year%100===0){
                message = year + " is not a Leap Year.";
            }
            else{
                message = year + " is a Leap Year.";
            }
        }
    }else{
        message = year + " is not a Leap Year.";
    }

    document.querySelector("#message").innerHTML=message;
}

// OR

// Leap Year
function isLeapM2(year) { 
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
    n = parseInt(document.querySelector(n).value);
    var a=[];

    if(n===1){
        a=[0];
    }
    else if(n===2){
        a=[0, 1];
    }
    else if(n>2){
        a[0]=0;
        a[1]=1;
        for(var i=2;i<n;i++){
            a.push(a[i-1]+a[i-2]);
        }
    }
    else{
        document.querySelector("#answer").innerHTML="Invalid number.";
    }
    document.querySelector("#answer").innerHTML="Series: " +a;
}
    
    