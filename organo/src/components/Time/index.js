import Colaborador from '../Colaborador'
import './Time.css'
import hexToRgba from 'hex-to-rgba'


const Time = ({ time, colaboradores, aoDeletar, mudarCor }) => {
    
    return (
        (colaboradores.length > 0) ?

            <section className="time" style={{backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(time.cor, '0.6') }}>
                <h3 style={{ borderColor: time.cor }}>
                    {time.nome}
                </h3>

                <input onChange={evento => mudarCor(evento.target.value, time.nome)} type='color' className='input-cor' value={time.cor} title="Clique aqui para mudar a cor dos Profissionais" />

                <div className="colaboradores">
                    {
                        colaboradores.map((colaborador, indice) =>
                            <Colaborador key={indice} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} email={colaborador.email} cor={time.cor} aoDeletar={aoDeletar} />
                        )
                    }
                </div>
            </section>
            :
            <section className="time" style={{backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(time.cor, '0.6')}} >
                <h3 style={{ borderColor: time.cor }}>
                    {time.nome}
                </h3>

                <input onChange={evento => mudarCor(evento.target.value, time.nome)} type='color' className='input-cor' value={time.cor} title="Clique aqui para mudar a cor dos Profissionais" />

                <div className="colaboradores">
                    <b>Ainda não existe nenhum colaborador cadastrado nesse TIME..</b>
                </div>
            </section>

    )
}

export default Time