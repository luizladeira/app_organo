import "./Rodape.css"

const Rodape = () => {
    return (
        <footer className="footer">
            <section className="redes-sociais">
                <ul>
                    <li><img src="/imagens/tw.png" /></li>
                    <li><img src="/imagens/fb.png" /></li>
                    <li><img src="/imagens/ig.png" /></li>
                </ul>
            </section>
            <section>
                    <img src="/imagens/logo.png" />
            </section>
            <section>
                    <p>
                        Curso Concluído na Alura
                    </p>
           </section>

        </footer>
    )
}

export default Rodape