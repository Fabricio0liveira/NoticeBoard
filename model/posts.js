
module.exports = {
    posts: [
        {
            id: 'ffwewfwfe',
            title: 'Teste do mural', 
            description: 'Descrição teste'
        },
    ],

    // Função que retorna todos os posts
    getAll() {
        return this.posts
    },

    newPost(title, description) {
    
        // Inserindo um novo objeto
        this.posts.push({ id: generateId(), title, description })
    },

    deletePost() {

        // Removendo elementos do objeto 'posts' em ordem decrescente.
        this.posts.shift()
    }

}

//Criando uma função para gerar os 'Ids' dos posts
function generateId() {

    return Math.random().toString(36).substr(2, 9)
    //Usando o método 'substr', para retirar o 'ponto' do Id
}