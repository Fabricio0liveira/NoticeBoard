const express = require('express')
const router = express.Router()
const body_parser = require('body-parser')
const cors = require('cors')
//Importando meu objeto posts
const posts = require('../model/posts')

const options = {
    origin: 'http://localhost:3000'
}

router.use(cors(options));

//Rota de busca
//Buscar os posts
router.get('/all', (req, res) => {
    //Não posso enviar como um objeto, então preciso fazer a conversão para string
    res.json(JSON.stringify(posts.getAll()))
})


//Rota para criaçao de novos posts
//bodyParser, sendo passado como 'Midlleware' 
//app.use(express.json())
router.post('/new', body_parser.json(), (req, res) => {
    let title = req.body.title
    let description = req.body.description

    posts.newPost(title, description)

    res.send('Post adicionado')

})

// router.delete('/all', (req, res) => {
//     res.send('Post excluído')
// })

module.exports = router