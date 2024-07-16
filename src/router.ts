import { Router } from "express";
import AutorControlador from "./controllers/AutorControlador";

const rotas = Router()

const autorContraldor = new AutorControlador()

rotas.get('/autores', autorContraldor.listar)
rotas.get('/autores/:id', autorContraldor.detalhar)

export default rotas
