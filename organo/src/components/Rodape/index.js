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
                <p className="layout-by">
                    Curso/Layout da <a href="https://cursos.alura.com.br/course/react-desenvolvendo-javascript" title="Curso de React: desenvolvendo com JavaScript da Alura" alt="Curso de React: desenvolvendo com JavaScript da Alura">Alura</a>
                </p>
            </section>
        </footer>
    )
}

export default Rodape