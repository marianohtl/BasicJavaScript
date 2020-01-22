nums = [1,2,3,4,5,6,7,8,9,10]

for(x in nums){
    if(x == 5) {
        break
        // o break não age em cima de um bloco if, ele age em cima de um bloco for ou while ou swift, sendo o bloco mais próximo
    }
    console.log(`${x} = ${nums[x]}`)
}
console.log("========================================================")

for (y in nums){
    if (y==5) {
        // o continue vai interromper a excução atual e vai para a próxima
        continue
    }
    console.log(`${y} = ${nums[y]}`)
}
console.log("========================================================")
externo: 
for(a in nums){
    for(b in nums){
        if(a == 2  && b == 3) break externo
        console.log(`Par = ${a}, ${b}`)
    }
}