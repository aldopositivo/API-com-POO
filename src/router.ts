import { Router } from "express";

const rotas = Router()

rotas.get('/', (req, res) => {
    res.send('OK!')
})

export default rotas