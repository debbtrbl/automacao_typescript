const BASE_URL = 'https://jsonplaceholder.typicode.com';

// definindo contrato da API
type Post = {
  userId: number;
  id?: number; // opcional, pois quando criamos um post, o id é gerado pelo servidor
  title: string;
  body: string;
};

type Coment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

// GET /posts
async function listarPosts(){
    console.log('1. GET /posts');
    const res = await fetch(`${BASE_URL}/posts`);
    const dados: Post[] = await res.json();
    console.log(`Status: ${res.status}`);
    console.log(`Lidos ${dados.length} posts. Ex:`, dados[0].title);
}

// GET /posts/id
async function buscarPorId(id: number){
    console.log(`2. GET /posts/${id}`);
    const res = await fetch(`${BASE_URL}/posts/${id}`);
    const dados: Post = await res.json();
    console.log(`Status: ${res.status}`);
    console.log(`Post encontrado: ${id} - `, dados.title);
}

// GET /posts/id/comments
async function listarComentarios(postId: number){
    console.log(`3. GET /posts/${postId}/comments`);
    const res = await fetch(`${BASE_URL}/posts/${postId}/comments`);
    const dados: Coment[] = await res.json();
    console.log(`Status: ${res.status}`);
    console.log(`O post ${postId} tem ${dados.length} comentários. Ex:`, dados[0].body);
}

async function chamarReqs() {
    listarPosts();
    buscarPorId(1);
    listarComentarios(1);
}

chamarReqs();
