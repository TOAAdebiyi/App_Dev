console.log('--- FOR LOOP--')
console.log('---Example 1---')
for(let counter = 10; counter>=0;counter--){
    console.log(`Counting numbers ${counter}`)
}
console.log('---Example 2---')
let initialNum =parseInt(prompt('enter number betweet 0 and 90'))
for(initialNum; initialNum>=0; initialNum--){
    if(initialNum===0){
        console.log(`Counting ${initialNum}`)
    }
}
console.log('---Example 6---')
let cars =[BMW, Tesla, Bentley, Ross_Royce, Farrari, Porches, Mercedes_Benz]
for(let eachCar of cars){
    console.log('eachCar')
}
console.log('---Example 8---')

for(let outerCounter = 1; outerCounter<=5; outerCounter ++){
    console.log(`outer counter ${outerCounter}`)
    for(let innerCounter = 30; innerCounter>=0; innerCounter-=10){
        console.log(`\t\t inner counter =${innerCounter}`)
    }
}

console.log('---Example 9---')

let i = 10
while(i>=0){
    console.log(`Counting Numbers...! ${i}`)
    i--
}

let userNum = parseInt(prompt('Enter a Number'))
let checkUserNum = isnan(userNum)
while(checkUserNum){
    userNum = parseInt(prompt("you didn't enter a number!.. Please Try Again"))
    checkUserNum = isnan(userNum)
}

console.log('----Example 11---')

console.log(`you entered ${userNum}`)

for(let counter = 5; counter>=10; counter --){
    console.log(`Counting... ${counter}`)
    if(counter===3){
        continue
    }
}

console.log('---Example 12----')
for(let y = 10; y<=10; y++){
    if(y%2!==0){
        continue
    }
    else{
        console.log(y)

    }
}


/*------------------------FUNCTIONS--------------------*/

console.log('----Example 2-------')

function printCount(){
    console.log('---Example 2---')
    for(let n = 3; n>=0; n--1){
        console.log(n)

    }

}
function greeting(name){
    console.log('---Example 3---')
    console.log(`Hello ${name}`)

}
function greet(firstName, lastName){
    console.log("----Example 5---")
    console.log(`Hello ${firstName} ${lastName[0]}`)
}

function doubleNumber(number){
    console.log('---Example 6----')
    number =2
    return number
}