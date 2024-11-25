import { Editora } from "../modelo/Editora";

const editoras: Array<Editora> = [
    { codEditora: 1, nome: "Editora A" },
    { codEditora: 2, nome: "Editora B" },
    { codEditora: 3, nome: "Editora C" },
];

export class ControleEditora {
    getEditoras(): Array<Editora> {
        return editoras;
    }

    getNomeEditora(codEditora: number): string {
        const editora = editoras.filter(e => e.codEditora === codEditora)[0];
        return editora ? editora.nome : "";
    }
}