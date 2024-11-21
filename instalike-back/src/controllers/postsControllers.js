// Todas as responsabilidades de lidar com requisições e respostas 

import { criarPost, getTodosOsPosts } from "../models/postsModel.js";
import fs from 'fs' // biblioteca nativa do Node, mas tem que importar

export async function listarPosts(req, res) {
    const posts = await getTodosOsPosts();
    res.status(200).json(posts);
}

export async function postarNovoPost(req, res) {
    // req.body é o body da requisição 
    const novoPost = req.body; 
    // tratamentos de exeções 
    try {
        const postCriado = await criarPost(novoPost);
        res.status(200).json(postCriado); 
    } catch (erro) {
        console.error(erro.message) // todo objeto erro tem uma propriedade chamada message 
        res.status(500).json({"Error:" : "Falha na requisição"})
    }
}

export async function uploadImagem(req, res) {
    const novoPost = {
        descricao: "",
        imgaeUrl: req.file.originalname,
        alt: "" 
    }
    try {
        const postCriado = await criarPost(novoPost);
        const imagemAtualizada = `uploads/${postCriado.insertedId}.png`
        fs.renameSync(req.file.path, imagemAtualizada)
        res.status(200).json(postCriado); 
    } catch (erro) {
        console.error(erro.message) 
        res.status(500).json({"Error:" : "Falha na requisição"})
    }
}