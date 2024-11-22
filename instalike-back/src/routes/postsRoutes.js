// Routers: Define as rotas da aplicação, ou seja, os endereços que podem ser acessados pelo cliente.

import express from "express";
import { listarPosts, postarNovoPost, uploadImagem, atualizarNovoPost } from "../controllers/postsControllers.js";
import multer from "multer"
import cors from "cors"; 

const corsOption = {
    origin: "http://localhost:8000", 
    optionsSuccessStatus: 200
}

// Configura o armazenamento do Multer para uploads de imagens
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})

// Cria uma instância do middleware Multer
const upload = multer({dest: "./uploads", storage})

// Define as rotas 
const routes = (app) => {
    app.use(express.json()); // permite que o servidor interprete requisições com o corpo no formato JSON
    app.use(cors(corsOption))
 
    app.get("/posts", listarPosts); // Rota para buscar todos os posts
    app.post("/posts", postarNovoPost); // rota para criar um post, chama a função controladora para criação de posts

    // Rota para upload de imagens (assumindo uma única imagem chamada "imagem")
    app.post("/upload", upload.single("imagem"), uploadImagem); // upload.single() para inicializar o Multer 
    
    app.put("/upload/:id", atualizarNovoPost)
}

export default routes; 