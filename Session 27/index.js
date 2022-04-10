

emp = {id:400, name:'Roopesh', age:13}

document.write(emp.id+' '+emp.name+' '+emp.age)


var roop = new Object()

roop.id = 101
roop.name = 'John'
roop.age = 89


document.write(roop.id+' '+roop.name+' '+roop.age)


// function lemon(id,name,age){
//     this.id = id;
//     this.name=name;
//     this.age=age;
// }

// h = lemon(30,'Himanshu',34)
// document.write(h.id,h.name,h.age)


// string methods


var x = 'Himanshuhasbudasjkcnakubcnasjkcncasjncouasncoauisna'
document.write('<br>',x.length)

// 'roopesh'
// index starts from 0 which means that 
// r -- 0
// o-- 1
// o -- 2 .. p -- 3

var y = 'roopesh is a nice man'
document.write('<br>',y.indexOf('nice'))

document.write('<br>',y.slice(13,17))


var v = 'hello'
var b = ' it is a sunny day'

var c = b.concat(v)

document.write('<br>',c)

var a = ['apple','banana','kiwi']
a.push('lemon')

document.write('<br>',a.pop())
document.write('<br>',a.pop())
document.write('<br>',a)
a.splice(2,0,'orange','avacado')
document.write('<br>',a)




