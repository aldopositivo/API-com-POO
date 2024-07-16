import { Router } from "express";
import AutorControlador from "./controllers/AutorControlador";

const rotas = Router()

const autorContraldor = new AutorControlador()

rotas.get('/autores', autorContraldor.listar)
rotas.get('/autores/:id', autorContraldor.detalhar)
rotas.post('/cadastrar',autorContraldor.cadastrar)

export default rotas
