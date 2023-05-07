import { useState } from "react"
import Botao from "../Botao"
import Campo from "../Campo"
import ListaSuspensa from "../ListaSuspensa"
import "./Formulario.css"

//const Formulario = (props) => {
const Formulario = ({ aoCadastrar, times, aoCriarTime }) => {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')
    const [nomeTime, setNomeTime] = useState('')
    const [corTime, setCorTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        aoCadastrar({
            nome: nome,
            email: email,
            cargo: cargo,
            imagem: imagem,
            time: time
        })

        console.log('form foi submetido => ', 'nome:' + nome, 'email: '+ email, 'cargo:' + cargo, 'imagem:' + imagem, 'time: ' + time)
        
        setNome('')
        setEmail('')
        setCargo('')
        setImagem('')
        setTime('')

    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar} >
                <h2>Preencha os dados para criar um Colaborador:</h2>
                <Campo obrigatorio={true} label="Nome" placeholder="Digite seu Nome" valor={nome} aoAlterado={valor => setNome(valor)} />
                <Campo obrigatorio={true} label="Email" placeholder="Digite seu Email" valor={email} aoAlterado={valor => setEmail(valor)} />
                <Campo obrigatorio={true} label="Cargo" placeholder="Digite seu Cargo" valor={cargo} aoAlterado={valor => setCargo(valor)} />
                <Campo label="Imagem" placeholder="Digite o endereço da Imagem" valor={imagem} aoAlterado={valor => setImagem(valor)} />
                <ListaSuspensa obrigatorio={true} label="Time" itens={times} valor={time} aoAlterado={valor => setTime(valor)} />
                <Botao>Novo Colaborador</Botao>
            </form>

            <form
                onSubmit={(evento) => {
                    evento.preventDefault()
                    aoCriarTime({ nome: nomeTime, cor: corTime })

                    setNomeTime('')
                    setCorTime('')
                }}
            >
                <h2>Preencha os dados para criar um novo Time:</h2>
                <Campo obrigatorio={true} label="Nome" placeholder="Digite o Nome do Time" valor={nomeTime} aoAlterado={valor => setNomeTime(valor)} />
                <Campo obrigatorio={true} label="Cor" type="color" placeholder="Digite a Cor do Time" valor={corTime} aoAlterado={valor => setCorTime(valor)} />
                <Botao>Novo Time</Botao>
            </form>
        </section>
    )
}

export default Formulario