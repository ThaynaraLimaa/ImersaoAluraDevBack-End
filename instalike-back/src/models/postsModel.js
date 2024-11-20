import conectarAoBanco from "../config/dbConfig.js";

// Concta ao banco de dados usando a string de conexão 
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO)

// busca todos os posts no banco de dados
export async function getTodosOsPosts() {
    const db = conexao.db("imarsao-instabyte") // banco de dados que criamos
    const colecao = db.collection("posts"); // coleção que criamos 

    return colecao.find().toArray()
}