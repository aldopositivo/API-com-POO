import 'dotenv/config'
import express from 'express'
import rotas from './router'

const app = express()

app.use(express.json())

app.use(rotas)

app.listen(process.env.PORT, () => {
    console.log(`Servidor Inicializado na porta ${process.env.PORT}`);
    
})

// OU 

// console.log(`Você esta rodando na porta ${process.env.PORT}`);
