import { v4 as uuidv4 } from 'uuid'
import Autor from '../models/autor'

type TPostagem = {
    titulo: string
    descricao: string
    autor: Autor 
}

export default class Postagem {
    readonly id: string
    titulo: string
    descricao: string
    autor: Autor 
    data_criacao: Date

    constructor(post: TPostagem){
        this.id = this.gerarID()
        this.titulo = post.titulo
        this.descricao = post.descricao
        this.autor = post.autor
        this.data_criacao = new Date()
        
    }

    private gerarID(): string{
        return uuidv4()
    }
}