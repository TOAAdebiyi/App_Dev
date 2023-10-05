const user = require('./mod')

console.log(user.helper('peter'))
console.log(user.id(123))
console.log(user.email('peterP@gmail.com'))

function callColor(innerfunction){
    innerfunction()
}

let color = function(){
    console.log('passing a function')
}

console.log(callColor(color))


/*
let count = 0

const timer = setInterval(()=>{
    count += 2
    console.log(`counting = ${count} seconds`)
    if (count == 10){
        clearInterval(timer)
    }
},2000);

/*

// Global Objects
setTimeout(()=>{
    console.log('Welcome to node.js')no
},3000);

/*
// console module
console.warn('WARNING! error  in the code')
console.error('ERROR! syntax error at line 5')
console.trace('Trace the codes below')
*/