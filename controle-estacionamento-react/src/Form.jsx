import React, { useState } from 'react'
import './Form.css'

function Form() {
  const [formData, setFormData] = useState({
    placa: '',
    proprietario: '',
    numeroApartamento: '',
    blocoApartamento: '',
    modeloVeiculo: '',
    corVeiculo: '',
    numeroVaga: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode fazer o que quiser com os dados do formulário, por exemplo, enviá-los para um servidor.
    console.log('Dados do formulário:', formData);
  };

  return(
    <form id="cadastroForm">
      <h2>Cadastro de Reserva</h2>

      <label htmlFor="placa">Placa do Veículo:</label>
      <input type="text" id="placa" required value={formData.placa} onChange={handleChange}/><br/>

      <label htmlFor="proprietario">Nome do Proprietário:</label>
      <input type="text" id="proprietario" required value={formData.proprietario} onChange={handleChange}/><br/>

      <label htmlFor="numeroApartamento">Número do Apartamento:</label>
      <input type="text" id="numeroApartamento" required value={formData.numeroApartamento} onChange={handleChange}/><br/>

      <label htmlFor="blocoApartamento">Bloco do Apartamento:</label>
      <input type="text" id="blocoApartamento" required value={formData.blocoApartamento} onChange={handleChange}/><br/>

      <label htmlFor="modeloVeiculo">Modelo do Veículo:</label>
      <input type="text" id="modeloVeiculo" required value={formData.modeloVeiculo} onChange={handleChange}/><br/>

      <label htmlFor="corVeiculo">Cor do Veículo:</label>
      <input type="text" id="corVeiculo" required value={formData.corVeiculo} onChange={handleChange}/><br/>

      <label htmlFor="numeroVaga">Número da Vaga de Estacionamento:</label>
      <input type="text" id="numeroVaga" required value={formData.numeroVaga} onChange={handleChange}/><br/>

      <button type="submit">Salvar</button>
    </form>
  );
}

export default Form