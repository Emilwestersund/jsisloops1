/*opg 1
const username = "serdar"
const password = "1234"

let myUsername = prompt("skriv ditt navn")
let myPassword = prompt("skriv in ditt passord")

if (myUsername == username && myPassword == password) {
    console.log("velkommen")
}else{
    console.log("feil passord eller navn")
}*/

//opg 2
/*
let t1 = Number(prompt("t1"));
let t2 = Number(prompt("t2"));
let t3 = Number(prompt("t3"));

console.log((t1 + t2 + t3) / 3);
*/

//opg 3
/*
let f = Number(prompt("fahrenhite"));
let c = (f-32)*5/9;
console.log(c)
*/

//opg 4
/*
const minverdi = 4;
let sum = 0;

for (let i = 1; i <= minverdi; i++) {
    console.log(i)
    sum = sum + i;
}

console.log(sum)
*/

//opg 5

let poeng =Number(prompt("poeng"));
if (poeng<30){ console.log(`karakter 1`)
}else if (poeng<45){ console.log(`karakter 2`)
}else if (poeng<60){ console.log(`karakterer 3`)
}else if (poeng<75){ console.log(`karakter 4`)
}else if (poeng<90){ console.log(`karakter 5`)
}else if (poeng=100 || poeng>100){ console.log(`karakter 6`)
}