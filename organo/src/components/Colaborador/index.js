import { Icon } from '@iconify/react';
import "./Colaborador.css"
import hexToRgba from 'hex-to-rgba'

const Colaborador = ({ imagem, nome, cargo, email, cor, aoDeletar }) => {

    const css_primaria = { backgroundColor: hexToRgba(cor, '0.6') }

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