// Todas as responsabilidades de lidar com requisições e respostas. As informações chegam aqui através da requisição (req)

import { atualizarPost, criarPost, getTodosOsPosts } from "../models/postsModel.js";
import fs from 'fs' // biblioteca nativa do Node, mas tem que importar
import gerarDescricaoComGemini from "../services/geminiService.js";

export async function listarPosts(req, res) {
    const posts = await getTodosOsPosts();
    res.status(200).json(posts);
}

export async function postarNovoPost(req, res) {
    // req.body é o body da requisição 
    const novoPost = req.body; 
    console.log(req.body)
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
        imgUrl: req.file.originalname,
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

export async function atualizarNovoPost(req, res) {
    const id = req.params.id; 
    const urlImagem = `http://localhost:3000/${id}.png`; 

    try {
        const imgBuffer = fs.readFileSync(`uploads/${id}.png`);
        const descricao = await gerarDescricaoComGemini(imgBuffer); 

        const postAtt = {
            imgUrl: urlImagem,
            descricao: descricao, 
            alt: req.body.alt
        };

        const postCriado = await atualizarPost(id, postAtt);
        res.status(200).json(postCriado); 
    } catch (erro) {
        console.error(erro.message) 
        res.status(500).json({"Error:" : "Falha na requisição"})
    }
}
