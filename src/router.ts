import { Router } from "express";
import AutorControlador from "./controllers/AutorControlador";
import PostControlador from "./PostControlador";

const rotas = Router()

const autorContraldor = new AutorControlador()
const postControlador = new PostControlador()

rotas.get('/autores', autorContraldor.listar)
rotas.get('/autores/:id', autorContraldor.detalhar)
rotas.post('/cadastrar',autorContraldor.cadastrar)
rotas.put('/editar/:id',autorContraldor.editarAutor)
rotas.delete('/excluir/:id',autorContraldor.excluirAutor)

// Rotas de Postagens

rotas.get('/post', postControlador.listarPost)
rotas.get('/post/:id', postControlador.detalharPost)
rotas.post('/cadastrar/post', postControlador.cadastrarPost)
rotas.put('/editar/post', postControlador.editarPost)
rotas.delete('/excluir/post', postControlador.excluirPost)

export default rotas
