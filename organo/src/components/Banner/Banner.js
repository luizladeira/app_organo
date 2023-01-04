import './Banner.css'

export function Banner(){
    // JSX é como o react lê o return e transforma em elementos do DOM
    return (
        <header className="banner">
            <img src="/imagens/banner.png" alt="O Banner principal da página"/>
        </header>
    )
}
