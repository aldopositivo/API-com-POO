import 'dotenv/config'
import express from 'express'

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('OK!')
})

app.listen(process.env.PORT, () => {
    console.log(`Servidor Inicializado na porta ${process.env.PORT}`);
    
})

// OU 

// console.log(`Você esta rodando na porta ${process.env.PORT}`);
