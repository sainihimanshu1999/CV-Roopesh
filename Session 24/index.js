var cars=['BMW','Audi','Merc','Bentley']
//document.write(cars[3])
//arrays there's an index

// i = index
// cars[0] = bmw
//cars[1] = audi...
var text =''

var i

//FOR LOOP
// for (iterable , condition, increment)
// i++ = i+1
for(i=0;i<cars.length;i++){
    text += cars[i] +'<br>'
    // bmw i = 0
    //audi i =1
    //merc = 2
    //bentely i =3
}

document.write(text)



var c 

for(c=0; c<100;c++){
    document.write(c) 
    //document.write('<br>')
}

document.write('<br>')
var g = {fname:'roopesh', age:'13',country:'philipines'}
//dictionary is a key value pair


// FOR IN LOOP

var x

for(x in g){
    document.write(g[x])
    document.write('<br>')
}



//FOR OF LOOP
// only work on iterable objects, arrays or strings

var food=['icecream','pizza','pasta','kebab']

var y

for(y of food){
    document.write(y)
    document.write('<br>')
}

//WHILE loop


//intialization

var count = 0

while(count<50){
    document.write(count)
    document.write('<br>')
    //increment
    count = count+1
}

// DO WHILE LOOP


var count = 5

do{
    document.write(count)
    count++
}while(count<45)
