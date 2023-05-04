const http = require('http');
const { getCharById } = require('./controllers/getCharById')
const PORT = 3001

http.createServer((req, res)=> {
    res.setHeader('Access-Control-Allow-Origin', '*');
//         /rickandmorty/character/2
    if(req.url.includes('/rickandmorty/character')) {
        const id = req.url.split('/').at(-1)
        getCharById(res, id)
    }
    
}).listen(PORT, console.log("port on 3001"))


