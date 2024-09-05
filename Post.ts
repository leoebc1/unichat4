import { Conta } from "./Conta"

export class Post {
    static idPostGlobal: number = 0 // contador estático para gerar IDs únicos para os posts
    private conteudo: string
    idPost: number // ID único do post
    idAutor: number // ID do autor do post
    dataHora: [number, number, number] // data e hora do post, armazenada como [dia, mês, ano]
    private curtidas: string[] // IDs das contas que curtiram o post
    comentarios: [string, string][] // comentários no post, armazenando conteúdo e nome de usuário

    constructor(idAutor: number, conteudo: string) {
        this.idPost = Post.idPostGlobal++ // gera um ID único para o post
        this.conteudo = conteudo
        this.idAutor = idAutor // define o autor do post
        const dataAtual = new Date() // obtém a data atual
        this.dataHora = [dataAtual.getDate(), dataAtual.getMonth() + 1, dataAtual.getFullYear()] // armazena a data no formato [dia, mês, ano]
        this.curtidas = [] // inicia o array de curtidas vazio
        this.comentarios = [] // inicia o array de comentários vazio
    }

    curtir(conta: Conta) {
        if (!this.curtidas.includes(conta.getNomeUsuario())) { // verifica se a conta já curtiu o post
            this.curtidas.push(conta.getNomeUsuario()) // adiciona o nick da conta ao array de curtidas
        }
    }

    comentar(conta: Conta, comentario: string) {
        console.log('entrou')
        this.comentarios.push([comentario, conta.getNomeUsuario()]) // adiciona um comentário ao post 
                                                               //com o conteúdo e o nome do usuário
    }

    getConteudo(): string{
        return this.conteudo
    }

    getCurtidas(): Array<string>{
        return this.curtidas
    }
}