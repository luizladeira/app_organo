import { Icon } from '@iconify/react';
import "./Colaborador.css"

const Colaborador = ({ imagem, nome, cargo, email, corPrimaria, corSegundaria, aoDeletar }) => {

    const css_primaria = { backgroundColor: corPrimaria }

    return (
        <div className="colaborador">
            <div className="deletar" onClick={aoDeletar}>
                <Icon fontSize={25} icon="mdi:close-octagon-outline" />
            </div>
            <div className="cabecalho" style={css_primaria}>
                <img src={imagem} alt={nome} />
            </div>
            <div className="rodape">
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
                <h6>E-MAIL: {email}</h6>
            </div>
        </div>
    )
}

export default Colaborador