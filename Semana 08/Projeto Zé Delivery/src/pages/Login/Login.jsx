import './Login.css'


function Login() {

    function handleSubmit() {
        console.log('Função iniciada!')
    }

    return (

        <div className='geral'>

            <div className='container2'>
                <input type="text" className='inputEmailLogin'  placeholder="Email" />
                    <input type="password" className='inputPasswordLogin' placeholder="Senha" />
                    <button type="submit" className='buttonEntrar' onClick={handleSubmit}>Entrar</button>
                    <div className='help'>
                        <span>Precisa de ajuda? Entre no Me Ajuda, Zé!</span>
                    </div>
            </div>
        </div>
    )
}

export default Login