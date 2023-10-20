import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./List.css";

function List() {
  
  const navigate = useNavigate();
   
  const veiculos = JSON.parse(localStorage.getItem('veiculos')) || [];

    const handleDetalhes = (id) => {
        navigate(`/details/${id}`);
    };

    const handleAlteracao = (id) => {
        navigate(`/vagas/${id}`);
    };

    const handleExclusao = (id) => {
      const veiculosAtualizados = veiculos.filter((veiculo, index) => index !== id);

      localStorage.setItem('veiculos', JSON.stringify(veiculosAtualizados));

      alert('Veículo excluído com sucesso!');
      
      window.location.reload();
  };

  return(
    <div class="lista">
            <h1>Listagem de veículos</h1>
            <ul>
                {veiculos.map((veiculo, index) => (
                    <li key={index}>
                        <strong>Número da Vaga: {veiculo.vaga}</strong>
                        <p>Modelo: {veiculo.modelo}</p>
                        <p>Placa: {veiculo.placa}</p>
                        <p>Proprietário: {veiculo.proprietario}</p>
                        <button class="exclusao" onClick={() => handleExclusao(index)}>Excluir</button>
                    </li>
                ))}
            </ul>
        </div>
  );                    
}

export default List