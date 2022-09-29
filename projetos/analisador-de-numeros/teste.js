let num = [5, 2 ,3 ,1 ,10 , 4]

/*
for (let a = 0; a < num.length; a++) {
    console.log(num[a])
} 

for (let a in num) { // lê-se: "Para cada posição em num"
    console.log(num[a])
} */
let tot = num.length 
let soma = 0
for (let pos in num) {
    soma += num[pos]
    media = soma/tot
}

console.log(soma)
console.log(media)

/*
for (let pos = 0; pos < num.length; pos++) {
    soma += num[pos]
} console.log(soma) */
