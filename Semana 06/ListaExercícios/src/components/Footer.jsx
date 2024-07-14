// import "./components/Footer.css"

function Footer(){

    return (
        <div className="footer">
            <div className="container">
                <img src="https://www.origamid.com/projetos/bikcraft/img/bikcraft.svg" alt="logo"></img>

                <div className="footer-contato">
                    <h3>CONTATO</h3>
                    <p><a href="#número">+55 21 9999-9999</a> </p>
                    <p><a href="#email">contato@bikcraft.com</a> </p>
                    <hr></hr>
                    <p>Rua Ali Perto, 42 - Botafogo</p>
                    <p>Rio de Janeiro - RJ</p>
                    <br></br>

                    <div className="footer-redes">
                        <a href="www.instagram.com">
                        <img src="https://www.origamid.com/projetos/bikcraft/img/redes/instagram.svg" alt="Instagram"></img>
                        </a>

                        <a href="www.facebook.com">
                            <img src="https://www.origamid.com/projetos/bikcraft/img/redes/facebook.svg" alt="Facebook"></img>
                        </a>

                        <a href="www.">
                            <img src="https://www.origamid.com/projetos/bikcraft/img/redes/youtube.svg" alt="youtube"></img>
                        </a>
                    </div>
                </div>

                <div className="footer-informações">
                    <h3>INFORMAÇÕES</h3>
                    
                    <ul className="footer-menu">
                        <li>Bicicletas</li>
                        <li>Seguros</li>
                        <li>Contato</li>
                        <li>Termos e Condições</li>
                    </ul>
                </div>

                <p className="direitosReservados">Bikcraft © Alguns direitos reservados.</p>
            </div>
        </div>
    )
}


export default Footer