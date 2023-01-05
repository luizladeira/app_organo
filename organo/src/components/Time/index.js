import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {
    console.log(props.corPrimaria + ' | ' + props.corSegundaria)

    const css_segundaria = { backgroundColor: props.corSegundaria }

    return (
        (props.colaboradores.length > 0) ?

            <section className="time" style={css_segundaria} >
                <h3 style={{ borderColor: props.corPrimaria }}>
                    {props.nome}
                </h3>

                <div className="colaboradores">
                    {
                        props.colaboradores.map(colaborador =>
                            <Colaborador key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} email={colaborador.email} corPrimaria={props.corPrimaria} corSegundaria={props.corSegundaria} />
                        )
                    }
                </div>
            </section>
            :
            <section className="time" style={css_segundaria} >
                <h3 style={{ borderColor: props.corPrimaria }}>
                    {props.nome}
                </h3>

                <div className="colaboradores">
                  <b>Ainda não existe nenhum colaborador cadastrado nesse TIME..</b>
                </div>
            </section>

    )
}

export default Time