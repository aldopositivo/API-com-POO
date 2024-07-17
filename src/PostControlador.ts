import { Request, Response } from "express";
import { autores, posts } from "./bancoDeDados";
import Postagem from "./postagem";


export default class PostControlador {

    listarPost(req: Request, res: Response){
        return res.json(posts)
    }

    detalharPost(req: Request, res: Response){
        const { id } = req.params

        const post = posts.find((elemento)=> {
            return elemento.id === id
        })

        if (!post) {
            return res.status(404).json({
                mensagem: "Postagem não encontrada!"
            })
        }
        return res.json(post)
    }

    cadastrarPost(req: Request, res: Response){
        const { titulo, descricao, autor_id} = req.body

        if(!titulo||!descricao||!autor_id) {
            return res.send(400).json({
                mensagem: "Todos os campos são obrigatórios!"
            })
        }

        const autor = autores.find((elemento) => {
            return elemento.id === autor_id
        })
        if (!autor) {
            return res.status(404).json({
                mensagem: "Autor não encontrado(a)!"
            })
        }

        const post = new Postagem({
            titulo,
            descricao,
            autor
        })

        posts.push(post)

        return res.status(201).json(post)
    }

    editarPost(req: Request, res: Response){
        const { id } = req.params
        const {titulo, descricao} = req.body

        if(!titulo||!descricao){
            return res.status(404).json({
                mensagem: "Todos os campos são obrigatórios!"
            })
        }

        const post = posts.find((elemento) => {
            return elemento.id === id
        })

        if (!post) {
            return res.status(404).json({
                mensagem: "Postagem não existe!"
            })
        }

        post.titulo = titulo
        post.descricao = descricao

        return res.status(204).send()

    }

    excluirPost(req: Request, res: Response){
        const { id } = req.params

        const postIndex = posts.findIndex((elemento) => {
            return elemento.id === id
        })

        if(postIndex === -1) {
            return res.status(404).json({
                mensagem: "A postagem não existe!"
            })
        }

        posts.splice(postIndex, 1)

        return res.status(204).send()
    }
}