import { Fragment } from 'react'
import './Banner.css'

export function Banner() {
    // JSX é como o react lê o return e transforma em elementos do DOM
    // Pode se usar <Fragment></Fragment> ou <> </>
    // O Fragment é usado no lugar da div mais não mostra no browser
    return (
        <Fragment>
            <header className="banner">
                <img src="/imagens/banner.png" alt="O Banner principal da página" />
            </header>
        </Fragment>

    )
}

