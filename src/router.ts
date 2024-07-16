import { Router } from "express";
import AutorControlador from "./controllers/AutorControlador";

const rotas = Router()

const autorContraldor = new AutorControlador()

rotas.get('/autores', autorContraldor.listar)

export default rotas
