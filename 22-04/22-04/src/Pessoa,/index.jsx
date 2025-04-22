export default function Pessoa() {
    const nome = 'Everson'
    const idade = 34
    const cidade = 'Fortaleza'
    return (
      <div>
        <p>Seu nome: {nome}</p>
        <p>Sua idade:{idade}</p>
        <p>Cidade onde mora:{cidade}</p>
        <p>Quando é 1 + 1 = {1+1}</p>
      </div>
    )
  }