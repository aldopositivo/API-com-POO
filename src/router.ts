import { Router } from "express";
import AutorControlador from "./controllers/AutorControlador";

const rotas = Router()

const autorContraldor = new AutorControlador()

rotas.get('/autores', autorContraldor.listar)
rotas.get('/autores/:id', autorContraldor.detalhar)
rotas.post('/cadastrar',autorContraldor.cadastrar)
rotas.post('/cadastrar/:id',autorContraldor.editarAutor)
rotas.delete('/cadastrar/:id',autorContraldor.excluirAutor)

export default rotas
