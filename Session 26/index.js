// function to display values in the calculator

function dis(a){
    document.getElementById('result').value += a; // a+= 1 = a = a+1
}

function solve(){
    let x = document.getElementById('result').value
    let y = eval(x)
    document.getElementById('result').value = y
}

function clr(){
    document.getElementById('result').value = ''
}


// eval
// eval(9+5) = 14