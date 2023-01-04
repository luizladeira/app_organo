import './CampoTexto.css'

const CampoTexto = (props) => {
    //console.log(props.label) // debug
    
    const placeholderModificada = `${props.placeholder}...`

    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>

            <input placeholder={placeholderModificada} />
        </div>
    )
}

export default CampoTexto