document.write('Hello'+'<br>')

// blocck statment

var a = 2
var b = 91

if(a>5){
    document.write('Our if statement is true'+"<br>")
}

//else means everything other than if is true

if (b>30){
    document.write('IF statement is true'+'<br>')
}else {
    document.write('If statement is False'+'<br>')
}


// % operator, it gives us the remainder
// == means comparing two values

// b%2 = 0

// 0 == 0, the condition

if(b%2 == 0){
    document.write('B is an even number')
}else{
    document.write('B is an odd number')
}


document.write('After the block statements'+'<br>')


// if else if statements

var c = 88

if(c>100){
    document.write('C is greater than 50'+'<br>')
}else if(c%2==0){
    document.write('C is also an even number'+'<br>')
}else if(c<100){
    document.write('C is less than hundered'+'<br>')
}else{
    document.write('Hello i am an else statement'+'<br>')
}


//Switch Cases

var nade = 'P'

document.write("Now we are entering our switch case example"+'<br>')

switch(nade){
    case 'A':document.write('We are inside Case A');
    break
    case 'B':document.write('We are inside Case B');
    break
    case 'C':document.write('We are inside Case C');
    break

default: document.write('We are inside Case deault case');
}

document.write('Exiting the switch case example'+'<br>');

// || or in javascript, any of the condition is true
// && means all the conditions in javascript is true


var d = 67
var c = 32

if (d>10 || c>40){
    document.write('both true');
}