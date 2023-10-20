import React from 'react';
import { Link,useNavigate } from 'react-router-dom';

const Header = () => {

  const navigate = useNavigate();

  const jumpCadastro = () => {
    //navigate programmatically
    navigate('/cadastro');
  };

  const jumpVagas = () => {
    //navigate programmatically
    navigate('/vagas');
  };

  const jumpListar = () => {
    //navigate programmatically
    navigate('/lista');
  };

  return(
    <header>
      <h1> Controle de Estacionamento </h1>
      <nav>
        <ul>
          <button type="button" class="btn btn-primary" id="btn-cadastro" onClick={jumpCadastro}>Cadastro</button>
          <button type="button" class="btn btn-primary" id="btn-disponivel"onClick={jumpVagas}>Vagas Disponíveis</button>
          <button type="button" class="btn btn-primary" id="btn-listagem"onClick={jumpListar}>Listar Vagas</button>
        </ul>
      </nav>
    </header>
  );
}

export default Header