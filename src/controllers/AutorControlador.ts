import { Request, Response } from "express";
import { autores } from "../bancoDeDados";
import Autor from "../../models/autor";

export default class AutorControlador {

    listar(req: Request, res: Response){
        return res.status(200).json(autores)
    }

    detalhar(req: Request, res: Response){
        const { id } = req.params

        const autor = autores.find((elemento=> {
            return elemento.id === id
        }))

        if (!autor) {
            return res.status(404).json({
                mensagem: "Autor não encontrado!"
            })
        }

        return res.json(autor)
    }

    cadastrar(req: Request, res: Response){
        const { nome, idade } = req.body

        if (!nome || !idade) {
            return res.status(400).json({
                mensagem: "Todos os campos são obrigatórios!"
            })
        }

        const autor = new Autor({
            nome,
            idade
        })

        autores.push(autor)

        return res.status(201).json(autor)
    }
}