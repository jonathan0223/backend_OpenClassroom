const http = require('http')

const server = http.createServer((req, res) => {
    res.end('Voilà la réponse du premier et deuxième serveur !')
    console.log('Ouais ça marche mon pote !')
})

server.listen(process.env.PORT || 3000)

