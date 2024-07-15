import "./Contato.css"

function Contato (){

    function handleSubmit() {
        console.log("Enviando a mensagem...")
        alert("Dados enviados!!")
    }

    return (
        <div className="container-contato">
        
            <section className="contato-formulario">
                <form className="form">
                    <div>
                        <label for="nome" >Nome</label>
                        <input type="text" id="nome" name="nome"  placeholder="Seu nome"></input>
                    </div>
                
                    <div>
                        <label for="telefone">Telefone</label>
                        <input type="text" id="telefone" placeholder="(219999-9999)"></input>
                    </div>

                    <div>
                        <label for="email">Email</label>
                        <input type="text" id="email" name="email" placeholder="contato@email.com"></input>
                    </div>

                    <br></br>
                    <div>
                        <label for="mensagem">Mensagem</label>
                        <input type="textarea" id="mensagem" name="mensagem" placeholder="O que você precisa?"></input>
                    </div>
                    <br></br>

                    <button className="button" type="button" onClick={handleSubmit}>ENVIAR MENSAGEM</button>

                </form>
            </section>
        </div>
    )
}

export default Contato