import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Vagas = () => {

    const navigate = useNavigate();
    const jumpHome = () => {
        //navigate programmatically
        navigate('/');
    };

    const veiculos = JSON.parse(localStorage.getItem('veiculos')) || [];

    return (
        <div className="app">
            <h1>Vagas Disponíveis</h1>
            <table class="table table-disponivel">
                <thead>
                    <tr>
                        <th>Número da vaga</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>01</td>
                    </tr>
                    <tr>
                        <td>02</td>
                    </tr>
                    <tr>
                        <td>03</td>
                    </tr>
                    <tr>
                        <td>04</td>
                    </tr>
                    <tr>
                        <td>05</td>
                    </tr>
                    <tr>
                        <td>06</td>
                    </tr>
                    <tr>
                        <td>07</td>
                    </tr>
                    <tr>
                        <td>08</td>
                    </tr>
                    <tr>
                        <td>09</td>
                    </tr>
                    <tr>
                        <td>10</td>
                    </tr>
                    <tr>
                        <td>11</td>
                    </tr>
                    <tr>
                        <td>12</td>
                    </tr>
                    <tr>
                        <td>13</td>
                    </tr>
                    <tr>
                        <td>14</td>
                    </tr>
                    <tr>
                        <td>15</td>
                    </tr>
                    <tr>
                        <td>16</td>
                    </tr>
                    <tr>
                        <td>17</td>
                    </tr>
                    <tr>
                        <td>18</td>
                    </tr>
                    <tr>
                        <td>19</td>
                    </tr>
                    <tr>
                        <td>20</td>
                    </tr>
                </tbody>
            </table>
            <button type="button" class="btn btn-primary" id="btn-voltar" onClick={jumpHome}>Voltar</button>
            <footer class="rodape">
                <p> Feito por Luan Henrique </p>
            </footer>
        </div>
    );
}

export default Vagas;