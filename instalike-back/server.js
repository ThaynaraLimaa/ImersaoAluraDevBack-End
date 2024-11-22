import express from "express"; 
import routes from "./src/routes/postsRoutes.js";

const app = express(); // app armazena a nossa aplição Express. Esta constante é usada para criar e definir rotas

app.use(express.static("uploads")) // servir arquivos estáticos
routes(app)

// incicia o servidor na porta 3000
app.listen(3000, () => {
    console.log("Servidor escutando...");
}); 
