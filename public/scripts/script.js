
document.addEventListener('DOMContentLoaded', () => {
    updatePosts();
})

function updatePosts() {
    fetch('http://192.168.3.9:3000/api/all').then(res => {
        return res.json()
    }).then(json => {
        console.log(json)

        let postElements = '';

        // convertendo json string em um objeto
        let posts = JSON.parse(json);
        posts.forEach((post) => {
            let postElement = `
                <div id="${post.id}" class="card mb-4">
                    <div class="card-header">
                        <h5 class="card-title">${post.title}</h5> 
                    </div>
                    <div class="card-body">
                        <div class="card-text">${post.description}</div>
                    </div>
                </div>    
            `

            postElements += postElement;
        })

        document.getElementById('posts').innerHTML = postElements;
    })

}

function newPost() {
    
    let title = document.getElementById('title').value;
    let description = document.getElementById('desc').value;

    if(title === '' || description === '') {
        alert('Favor preencher os dois campos!')
    } else {
        let post = {title, description};

        const options = {
            method: "POST",
            headers: new Headers({'content-type': 'application/json'}),
            body: JSON.stringify(post) 
        }

        fetch('http://192.168.3.9:3000/api/new', options).then(res => {
            // console.log(res);
            updatePosts();

            document.getElementById('title').value = '';
            document.getElementById('desc').value = '';
        })
    }

    
}

function deletePost() {
    // console.log('Clicou no excluir')   
    let post = document.getElementById('posts').innerHTML[0] = "";

    const options = {
        method: "DELETE",
        headers: new Headers({'content-type': 'application/json'}),
        body: JSON.stringify(post) 
    }

    fetch('http://192.168.3.9:3000/api/all', options).then(res => {
        // console.log(res);
        updatePosts();
    })

}