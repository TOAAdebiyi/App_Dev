const fs = require('fs')
// importing the http module

const http= require('http')

//  create a readable stream to read file readme.txt. This will fill up the buffer //

const readStream = fs.createReadStream('readme.txt')
const writeStream = fs.createWriteStream('write.txt')

//  PIPPING

const server = http.createServer((request, response)=>{
    response.writeHead(200, {"content-Type": "text/html"});
    const url = request.url

    if(url==='/home'|| url==='/'){
        fs.createReadStream('index.html').pipe(response)
    }
    else if(url==='/about'){
    fs.createReadStream('about.html').pipe(response)
}
else{
    fs.createReadStream('404.html').pipe(response)
}

})

//server listening to port 3000

server.listen((3000), ()=>{
    console.log('server is running at localHost: 3000')
})

/*

const { response } = require('express')

// creating server in NodeJS

const server = http.createServer((http.request, response)=>{
    // sending response
    response.write("This is the response from the server")
    response.end('\n------End------\n')
    console.log(http.request.url)
})

//  STREAM AND BUFFERS //
//  create a readable stream to read file readme.txt. This will fill up the buffer //
/*

//  Listen to the stream to read file readme.txt. This will fill up the buffer:

readStream.on('data', (d)=>{
    console.log('\n--------------------new data received---------------------- \n')
    console.log(d)
    console.log('\n------------------------------------------------------------ \n')
    WriteStream.write(d)
})

readStream.on('open', ()=>{
    console.log('\n\nStream opened')
})

readStream.on('end', ()=>{
    console.log('Stream closed!.... \n\n')
})

//  writestream //

const writestream = fs.createWriteStream('write.txt')
writestream.write('streaming text content...', 'utf-8')
*/