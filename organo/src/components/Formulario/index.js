import { useState } from "react"
import Botao from "../Botao"
import CampoTexto from "../CampoTexto"
import ListaSuspensa from "../ListaSuspensa"
import "./Formulario.css"

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
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
                <h2>Preencha os dados para criar o card:</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu Nome" valor={nome} aoAlterado={valor => setNome(valor)} />
                <CampoTexto obrigatorio={true} label="Email" placeholder="Digite seu Email" valor={email} aoAlterado={valor => setEmail(valor)} />
                <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu Cargo" valor={cargo} aoAlterado={valor => setCargo(valor)} />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da Imagem" valor={imagem} aoAlterado={valor => setImagem(valor)} />
                <ListaSuspensa obrigatorio={true} label="Time" itens={props.times} valor={time} aoAlterado={valor => setTime(valor)} />
                <Botao>Criar Card</Botao>
            </form>
        </section>
    )
}

export default Formulario