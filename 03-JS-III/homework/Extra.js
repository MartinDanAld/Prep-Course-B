const arr = [1,2,3]
console.log(arr)

//metrodos array

// length
const longitud = arr.length
console.log(longitud)

//Push --> agregar elementos al final
console.log(arr)
arr.push(4)
console.log(arr)

//pop -->saca el ultimo elemento
arr.pop()
console.log(arr)

//unshitf --> agrega al principio de la lista
arr.unshift(0)
console.log(arr)

//shift --> Extrae el primer elemento
arr.shift()
console.log(arr)

for(var i=0 ; i<arr.lenght ; i++){
  console.log(arr[i])

}

//For Of
console.log("  ")
for (const elemento of arr){
  console.log(elemento)
}

//For Each
console.log("  ")
arr.forEach(function (element){console.log(element)})

//MAP

function saludar (string){
  console.log(string)
}
const saludar = (string)=> console.log(string)

const nuevoArray = arr.map((e)=>console.log(e))
console.log(nuevoArray)

//Filter


//Reduce