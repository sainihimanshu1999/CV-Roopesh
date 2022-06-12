document.write('Written by javascript', '<br>')
 // maths random functions 
document.write(Math.floor(Math.random()*10), '<br>') // 0 to 9
document.write(Math.floor(Math.random()*11), '<br>')    // 0 to 10
document.write(Math.floor(Math.random()*100), '<br>') // 0 to 99
document.write(Math.floor(Math.random()*101), '<br>') // 0 to 100
document.write(Math.floor(Math.random()*100), '<br>') +1 // 1 to 100
document.write(Math.floor(Math.random()*10), '<br>')+1 // 1to 10
document.write(Math.floor(Math.random()*4), '<br>')+2 // 2 to 6



function getRandom(a){
    return Math.floor(Math.random()*a);
}


document.write(getRandom(3),'<br>')



// maths boolean function


document.write(Boolean(0), '<br>') // returns false
document.write(Boolean(1), '<br>') // return True
document.write(Boolean(-3), '<br>') // return True
document.write(Boolean('true'), '<br>') //return True
document.write(Boolean('false'), '<br>') // return True
document.write(Boolean(''), '<br>')// false
document.write(Boolean([1,0,1,1]), '<br>') // true, false, true , true

