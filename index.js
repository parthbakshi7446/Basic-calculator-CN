var display = document.querySelector("#display input");

var num1=0; //variable 1
var num1dec=0; //variable 1 decimal value
var num1sign=0; //variable 1 sign +/-
var num2=0; //variable 2
var num2dec=0; //variable 2 decimal
var num2sign=0; //variable 2 sign
var operat=0; //operator
var counter=0; //currently input varible 0 for 1 and 1 for 2
var deci=0; //1 if inputing data on decimal side else 0

function clearall(){
    display.value="";
    num1=0;
    num2=0;
    num1dec=0;
    num2dec=0;
    num1sign=0;
    num2sign=0;
    counter=0;
    deci=0;
    operat=null;
    display.placeholder="I'm here to Help You";
}

function print(){
    if(counter==0){
        if(num1sign==0){
            display.value="";
        }
        else{
            display.value="-";
        }
        display.value+=num1;
        if(num1dec>0){
            display.value+='.'+num1dec;
        }
    }
    else if(counter==1){
        if(num2sign==0){
            display.value="";
        }
        else{
            display.value="-";
        }
        display.value+=num2;
        if(num2dec>0){
            display.value+='.'+num2dec;
        }
    }
}
function decimal(number){
    if(number=='.'){
        deci=1;
        display.value+='.';
        return;
    }
    if(counter==0){
        num1dec=num1dec*10+number;
        print();
    }
    else if(counter==1){
        num2dec=num2dec*10+number;
        print();
    }
}
function signShift(){
    if(counter==0){
        num1sign=num1sign^1;
        print();

    }
    else if(counter==1){
        num2sign=num2sign^1;
        print();
    }
}
function addcont(number){
    if(deci==1){
        decimal(number);
        return;
    }
    if(counter==0){
        num1=num1*10+number;
        print();
    }
    else if(operat!=null && counter==1){
        num2=num2*10+number;
        print();
    }
    else{
        display.value="enter operator";
    }
    
}

function operator(_operator){
    operat = _operator;
    counter=counter^1;
    display.value="";
    deci=0;
    display.placeholder="enter second number";
}

function result(){

    while(num1dec>1){
        num1dec*=0.1;
    }
    while(num2dec>1){
        num2dec*=0.1;
    }
    num1=eval(num1+num1dec);
    num2=eval(num2+num2dec);
    if(num1sign==1){
        num1*=-1;
    }
    if(num2sign==1){
        num2*=-1;
    }
    console.log(num1);console.log(num2);
    var ans = eval(num1+operat+num2);
    display.value=ans;
    console.log(ans);

    num1sign=0;
    if(ans<0){
        ans*=-1;
        num1sign=1;
    }
    num1=eval(ans/1);
    num1dec=eval(ans%1);
    num1-=num1dec;
    
    num2=0;
    num2dec=0;
    num2sign=0; 
    counter=0;
    operat=null;
}