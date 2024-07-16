import Autor from "../models/autor";
import Postagem from "./postagem";

export const autores: Autor[] = []

export const posts: Postagem[] = [
    new Postagem({
        titulo: 'Bananas de Pijamas',
        descricao: 'Fala a história de duas bananas que são gemeos',
        autor: new Autor({
            nome: 'Monteiro Lobato',
            idade: 45
        })
    })
]

