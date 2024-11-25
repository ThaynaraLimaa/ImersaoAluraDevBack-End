import 'dotenv/config';
import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbConfig.js";


const conexao = await conectarAoBanco(process.env.STRING_CONEXAO) // Concta ao banco de dados usando a string de conexão 

const NOME_DATABASE = "imarsao-instabyte"
const NOME_COLECAO = "posts"

export async function getTodosOsPosts() {
    const db = conexao.db(NOME_DATABASE); 
    const colecao = db.collection(NOME_COLECAO);  

    return colecao.find().toArray()
}

export async function criarPost(novoPost) {
    const db = conexao.db(NOME_DATABASE); 
    const colecao = db.collection(NOME_COLECAO)

    return colecao.insertOne(novoPost)
}

export async function atualizarPost(id, novoPost) {
    const db = conexao.db(NOME_DATABASE)
    const colecao = db.collection(NOME_COLECAO)
    const objId = ObjectId.createFromHexString(id) 

    return colecao.updateOne({_id: new ObjectId(objId)},  {$set:novoPost})
}