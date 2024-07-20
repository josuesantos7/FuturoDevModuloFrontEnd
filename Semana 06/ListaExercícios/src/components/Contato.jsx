import "./Contato.css"
import { useState } from 'react'

function Contato (){

        const [nome, setNome] = useState('')
        const [telefone, setTelefone] = useState('')
        const [email, setEmail] = useState('')
        const [mensagem, setMensagem] = useState('')
    
        function handleSubmit() {
            const objetoContato = {
                nome: nome,
                telefone: telefone,
                email: email,
                mensagem: mensagem
            }
    
            console.log('DADO ENVIADO: ', objetoContato)
        }

    return (
        <div className="container-contato">
        
            <section className="contato-formulario">
                <form className="form">
                    <div>
                        <label for="nome" >Nome</label>
                        <input type="text" id="nome" name="nome" value={nome}  placeholder="Seu nome" onChange={(e) => setNome(e.target.value)}></input>
                    </div>
                
                    <div>
                        <label for="telefone">Telefone</label>
                        <input type="text" id="telefone" name="telefone" value={telefone} placeholder="(219999-9999)" onChange={(e) => setTelefone(e.target.value)}></input>
                    </div>

                    <div>
                        <label for="email">Email</label>
                        <input type="text" id="email" name="email" value={email} placeholder="contato@email.com" onChange={(e) => setEmail(e.target.value)}></input>
                    </div>

                    <br></br>
                    <div>
                        <label htmlFor="mensagem">Mensagem</label>
                        <textarea id="mensagem" name="mensagem" value={mensagem}   placeholder="O que você precisa?" onChange={(e) => setMensagem(e.target.value)}></textarea>
                    </div>
                    <br></br>

                    <button className="button" type="submit" onClick={handleSubmit()}>ENVIAR MENSAGEM</button>

                </form>
            </section>
        </div>
    )
}

export default Contato