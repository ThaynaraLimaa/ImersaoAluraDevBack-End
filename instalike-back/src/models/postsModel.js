// Models: Representa a estrutura dos dados que serão armazenados no banco de dados.

import conectarAoBanco from "../config/dbConfig.js";

// Concta ao banco de dados usando a string de conexão 
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO)

// busca todos os posts no banco de dados
export async function getTodosOsPosts() {
    const db = conexao.db("imarsao-instabyte"); // banco de dados que criamos
    const colecao = db.collection("posts"); // coleção que criamos 

    return colecao.find().toArray()
}

// Coloca o novo post no banco de dados 
export async function criarPost(novoPost) {
    const db = conexao.db("imarsao-instabyte"); 
    const colecao = db.collection("posts")

    return colecao.insertOne(novoPost)
}
