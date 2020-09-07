let num = [5, 8, 2, 9, 3, 50]
num.sort()
num[10]=30
console.log(num)
console.log(`O vetor tem ${num.length} elementos.`)
console.log(`O primeiro valor do vetor é ${num[0]}.`)
console.log(num.indexOf(undefined))
/*for(i=0; i<num.length;i++){
    console.log(`O elemento ${num[i]} posição ${i}`)
}
/*for(i in num){
    console.log(`O elemento ${num[i]} posição ${i}`)
}*/