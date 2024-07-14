import "./Header.css"

function Header(){
    return (

        <div>
            <div className="header">
                <img src="https://www.origamid.com/projetos/bikcraft/img/bikcraft.svg" alt="logo" width={136} height={32}></img>
                <ul className="navbar">
                    <li>Bicicletas</li>
                    <li>Seguros</li>
                    <li>Contato</li>
                </ul>
            </div>
        </div>
    )
}

export default Header