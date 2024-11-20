import express from "express";
import { listarPosts } from "../controllers/postsControllers.js";

const routes = (app) => {
    app.use(express.json()); // permite que o servidor interprete requisições com o corpo no formato JSON

    // Rota para buscar todos os posts 
    app.get("/posts", listarPosts);
}

export default routes; 