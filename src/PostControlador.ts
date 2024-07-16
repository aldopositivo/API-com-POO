import { Request, Response } from "express";
import { posts } from "./bancoDeDados";


export default class PostControlador {

    listarPost(req: Request, res: Response){
        return res.json(posts)
    }

    detalharPost(req: Request, res: Response){
    
    }

    cadastrarPost(req: Request, res: Response){
    
    }

    editarPost(req: Request, res: Response){
        
    }

    excluirPost(req: Request, res: Response){
        
    }
}