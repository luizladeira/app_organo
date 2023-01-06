import './ListaSuspensa.css'

const ListaSuspensa = (props) => {

    //console.log(props.itens)
    
    return (
        <div className="lista-suspensa">
            <label>{props.label}</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.obrigatorio} value={props.valor}>
                <option value=""></option>
                {props.itens.map(item => {
                        return <option key={item}>{item}</option>
                    } // para cada item retorna uma option com a lista
                )} 
            </select>
        </div>
    )
}

export default ListaSuspensa