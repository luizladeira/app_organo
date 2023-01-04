import './CampoTexto.css'

const CampoTexto = (props) => {
    //console.log(props.label) // debug
    
    const placeholderModificada = `${props.placeholder}...`

    let valor = 'Luiz Ladeira'

    const aoDigitado = (evento) => {
        valor = evento.target.value
        console.log(valor)
    }

    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>

            <input required={props.obrigatorio} onClick={aoDigitado} placeholder={placeholderModificada} />
        </div>
    )
}

export default CampoTexto