import { Icon } from '@iconify/react';
import "./Colaborador.css"
import hexToRgba from 'hex-to-rgba'

const Colaborador = ({ id, imagem, nome, cargo, email, cor, aoDeletar }) => {

    //console.log('a cor é: '+cor);
    
    //Nota: foi criado uma arrow function no onclick porque senão ele irá excluir tudo ao inves do que foi clicado

       return (
        <div className="colaborador">
            <div className="deletar" onClick={() => aoDeletar(id)}>
                <Icon fontSize={25} icon="mdi:close-octagon-outline" />
            </div>
            <div className="cabecalho" style={{ backgroundColor: hexToRgba(cor, '0.6') }}>
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