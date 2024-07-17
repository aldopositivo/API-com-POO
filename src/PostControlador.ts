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
        
    }

    excluirPost(req: Request, res: Response){
        
    }
}