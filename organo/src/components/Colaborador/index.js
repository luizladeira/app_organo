import { AiOutlineDelete, AiOutlineStar, AiTwotoneStar } from 'react-icons/ai';
import "./Colaborador.css"
import hexToRgba from 'hex-to-rgba'

const Colaborador = ({ id, favorito, imagem, nome, cargo, email, cor, aoDeletar, aoFavoritar }) => {

    
    //Nota: foi criado uma arrow function no onclick porque senão ele irá excluir tudo ao inves do que foi clicado
    function favoritar() {
        aoFavoritar(id);
    }

    return (
        <div className="colaborador">
            <div className="deletar" onClick={() => aoDeletar(id)}>
                <AiOutlineDelete fontSize={25} />
            </div>
            <div className='favorito'>
                    {favorito ? <AiTwotoneStar color="#e72537" size={25} onClick={favoritar} /> : <AiOutlineStar size={25} onClick={favoritar} />}
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