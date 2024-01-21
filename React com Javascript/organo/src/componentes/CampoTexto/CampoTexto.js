import { useState } from 'react';
import './CampoTexto.css'

export const CampoTexto = (props) => {

    // let valor = 'Marcelo Mendes';

    const [valor, setValor] = useState('') 

    const aoDigitado = (evento) => {        
        props.aoAlterado(evento.target.value)
    }

    return (
      <div className="campo-texto">
        <label>{props.label}</label>
        <input
          value={props.valor}
          onChange={aoDigitado}
          required={props.obrigatorio}
          placeholder={props.placeholder}
        />
      </div>
    );
}
