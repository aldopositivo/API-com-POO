import { Request, Response } from "express";
import { posts } from "./bancoDeDados";


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
    
    }

    editarPost(req: Request, res: Response){
        
    }

    excluirPost(req: Request, res: Response){
        
    }
}