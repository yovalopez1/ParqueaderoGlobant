let fecha1 = new Date()
let fecha2
setTimeout(function(){
    fecha2 = new Date()

    diferencia = fecha2.getTime() - fecha1.getTime()
    console.log(diferencia/1000)
},5000)

console.log(fecha1)
console.log(fecha2)


