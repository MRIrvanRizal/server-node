let http = require('http')
let finalhandler = require('finalhandler')
let router = require('router')

let server = http.createServer( function (request, response) {
    router(request, response, finalhandler(request, response))
})

server.listen(3000, function () {
    console.log('Hi, my Server already running on part on port 3000!!!!')
} )


console.log('test')
