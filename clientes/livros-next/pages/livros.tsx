import { useEffect, useState } from "react";
import { ControleLivros } from "../src/models/ControleLivros";
import { Livro } from "../src/models/Livro";

const LivroLista = () => {
  const [livros, setLivros] = useState<Livro[]>([]);
  const controleLivros = new ControleLivros();

  // Função para carregar os livros ao montar o componente
  const carregarLivros = async () => {
    await controleLivros.obterLivros();
    setLivros(controleLivros.livros);
  };

  // Função para excluir um livro
  const excluirLivro = async (codigo: number) => {
    await controleLivros.excluir(codigo);
    carregarLivros(); // Recarregar a lista de livros após exclusão
  };

  // Hook para carregar os livros ao montar o componente
  useEffect(() => {
    carregarLivros();
  }, []);

  return (
    <div>
      <h1>Lista de Livros</h1>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Resumo</th>
            <th>Editora</th>
            <th>Autores</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {livros.map((livro) => (
            <tr key={livro.codigo}>
              <td>{livro.titulo}</td>
              <td>{livro.resumo}</td>
              <td>{livro.editora}</td>
              <td>{livro.autores.join(", ")}</td>
              <td>
                <button onClick={() => excluirLivro(livro.codigo)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LivroLista;
