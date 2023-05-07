//import { useState } from 'react'
import './Campo.css'

/* ANTIGO
const Campo = (props) => {

    const placeholderModificada = `${props.placeholder}...`


    //MUDANÇA NO ESTADO DO VALOR

   
        hooks (GANCHO) - é alguma coisa que o react entrega para gente para que conseguimos pegar o estado dentro de uma função
        valor: para ler 
        setValor: para escrever
    
        Exemplo:

            const [valor, setValor] = useState('Luiz Ladeira') //VALOR PADRÃO 

            const aoDigitado = (evento) => {
                setValor(evento.target.value)
                console.log(valor)
            }
   

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }


    return (
        <div className="campo">
            <label>
                {props.label}
            </label>
            <input value={props.valor} required={props.obrigatorio} onChange={aoDigitado} placeholder={placeholderModificada} />
        </div>
    )
}
*/

const Campo = ({ type = 'text', label, placeholder, valor, aoAlterado, obrigatorio = false }) => {
    return (
        <div className={`campo campo-${type}`}>
            <label>{label}</label>
            <input type={type} value={valor} onChange={evento => aoAlterado(evento.target.value)} required />
        </div>
    )
}


export default Campo