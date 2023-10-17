import './Header.css'

function Header(){
  return(
    <header>
      <h1>Controle de Estacionamento</h1>
      <nav>
        <ul>
          <li><a href="#">Cadastro</a></li>
          <li><a href="#">Listagem</a></li>
          <li><a href="#">Vagas Disponíveis</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header