import express from "express"; 

const app = express(); // express é uma função 
app.listen(3000, () => {
    console.log("Servidor escutando...");
}); // 3000 = porta do servidor local 

// Criar uma rota
app.get("/api", (req, res) => {
    res.status(200).send("Boas vinda à imerssão!"); 
}); 



// node server.js para executar o servidor 
