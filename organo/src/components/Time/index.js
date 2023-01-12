import Colaborador from '../Colaborador'
import './Time.css'

const Time = ({ time, colaboradores, aoDeletar, mudarCor }) => {
    const css_segundaria = { backgroundColor: time.corSegundaria }

    return (
        (colaboradores.length > 0) ?

            <section className="time" style={css_segundaria} >
                <h3 style={{ borderColor: time.corPrimaria }}>
                    {time.nome}
                </h3>

                <input onChange={evento => mudarCor(evento.target.value, time.nome)} type='color' className='input-cor' value={time.corPrimaria} title="Clique aqui para mudar a cor dos Profissionais" />

                <div className="colaboradores">
                    {
                        colaboradores.map((colaborador, indice) =>
                            <Colaborador key={indice} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} email={colaborador.email} corPrimaria={time.corPrimaria} corSegundaria={time.corSegundaria} aoDeletar={aoDeletar} />
                        )
                    }
                </div>
            </section>
            :
            <section className="time" style={css_segundaria} >
                <h3 style={{ borderColor: time.corPrimaria }}>
                    {time.nome}
                </h3>

                <input onChange={evento => mudarCor(evento.target.value, time.nome)} type='color' className='input-cor' value={time.corPrimaria} title="Clique aqui para mudar a cor dos Profissionais" />

                <div className="colaboradores">
                    <b>Ainda não existe nenhum colaborador cadastrado nesse TIME..</b>
                </div>
            </section>

    )
}

export default Time