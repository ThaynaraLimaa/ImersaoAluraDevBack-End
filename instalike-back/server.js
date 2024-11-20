import express from "express"; 
import routes from "./src/routes/postsRoutes.js";

const posts = [
    {
        descricao: "Gato fazendo Ioga", 
        imagem: "https://placecats.com/millie/300/500",
        id: 1
    },
    {
        descricao: "Gatinho dormindo", 
        imagem: "https://placecats.com/millie/300/500",
        id: 2
    },
    {
        descricao: "Gato dançando", 
        imagem: "https://placecats.com/millie/300/500",
        id: 3
    },
    {
        descricao: "Gato dentro de uma caixa", 
        imagem: "https://placecats.com/millie/300/500",
        id: 4
    },
    {
        descricao: "Gatinho brincando com bolinha", 
        imagem: "https://placecats.com/millie/300/500",
        id: 5
    }
]; // Array em memória 

const app = express(); // app armazena a nossa aplição Express. Esta constante é usada para criar e definir rotas
routes(app)

// incicia o servidor na porta 3000
app.listen(3000, () => {
    console.log("Servidor escutando...");
}); 


// function buscarPostPorId(id) {
//     return posts.findIndex((post) => { return post.id == Number(id)}) // coloquei find invés de findIndex 
// }

// app.get("/posts/:id", (req, res) => {
//     const index= buscarPostPorId(req.params.id); 
//     res.status(200).json(posts[index])
// })



// node server.js para executar o servidor 
