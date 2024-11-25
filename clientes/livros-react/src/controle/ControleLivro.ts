import { Livro } from "../modelo/Livro";

const livros: Array<Livro> = [
    { codigo: 1, codEditora: 1, titulo: "Livro A", resumo: "Resumo do livro A", autores: ["Autor A1", "Autor A2"] },
    { codigo: 2, codEditora: 2, titulo: "Livro B", resumo: "Resumo do livro B", autores: ["Autor B1"] },
    { codigo: 3, codEditora: 3, titulo: "Livro C", resumo: "Resumo do livro C", autores: ["Autor C1", "Autor C2"] },
];

export class ControleLivro {
    obterLivros(): Array<Livro> {
        return livros;
    }

    incluir(livro: Livro): void {
        const novoCodigo = livros.length > 0 ? livros[livros.length - 1].codigo + 1 : 1;
        livro.codigo = novoCodigo;
        livros.push(livro);
    }

    excluir(codigo: number): void {
        const indice = livros.findIndex(livro => livro.codigo === codigo);
        if (indice >= 0) {
            livros.splice(indice, 1);
        }
    }
}