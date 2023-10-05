const fs = require('fs')

fs.rmdirSync('newDir')
fs.mkdirSync('newDir')

fs.mkdir('images', function(e){
    if(e){
        console.log('images directory created successfully..!')
    }
})

// create a synchronous file using writeFileSync() //

let fileContent = 'This file has three names:\n1. peter\n2. martha\n3. jason'
fs.writeFileSync('write.txt', fileContent, 'utf-8')


// create an asynchronous file using writeFile //

let msg= 'Welcome to nodejs I/O files'
fs.writeFile('msg.txt', msg, 'utf-8', function(e){
    if(e){
        console.log(e)
    }
})

// append information into an existing file //

let addNames = '4. George\n5. Ann'
fs.appendFile('write.txt', addNames, 'utf-8', function(error){
    if(error){
        console.log(error)
    }
})

// remove an existing file //

fs.unlink('msg.txt', function(error){
    console.log(error)
})


// asynchronous read module

console.log('line after readFileSync')

fs.readFile('read.txt', 'utf-8', function(error, data){
    console.log('\n\n-------asynch read file--------')
    console.log(data)
})

console.log('line after readFile')
let sum = 5+20
console.log(`sum =${sum}`)

// Synchronous read module

console.log('\n\nLine before readfileSync')

let fileRead = fs.readFileSync('readme.txt', 'utf-8')
console.log(fileRead)
console.log('line after readFileSync')

