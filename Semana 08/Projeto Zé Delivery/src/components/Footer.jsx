import './Footer.css'

function Footer(){
    return (
        <>
                < div className="footer-home">
                    <figure>
                        <img src="https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-web.imgix.net%2Fstatic%2Fimg%2Flogo-white-text.png%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D176%26h%3D56%26dpr%3D2%26fm%3Dpng&w=256&q=75" alt="Logo Ze Delivery"></img>
                    </figure>

                    <div className='cards-footer'>
                        <h2>Sobre o Zé Delivery</h2>
                        <a href='#'>Me ajuda, Zé!</a>
                        <a href='#'>Trabalhe conosco</a>
                        <a href='#'>Cidades atendidas</a>
                    </div>

                    <div className='cards-footer'>
                        <h2>Parcerias</h2>
                        <a href='#'>Quero ser parceiro</a>
                        <div></div>
                        <h2>Cartão Presente</h2>
                        <a href='#'>Comprar aqui</a>
                    </div>

                    <div className='cards-footer'>
                        <div>
                            <h2>Social</h2>
                            <a href='https://twitter.com/ZeDelivery'><img className='icones-footer-home'src='https://cdn-icons-png.flaticon.com/128/1241/1241015.png'></img></a>
                            
                            <a href='https://www.facebook.com/zedeliverydebebidas'><img className='icones-footer-home' src='public\facebook.ico'></img></a>

                            <a href='https://www.instagram.com/zedelivery/?hl=pt'><img className='icones-footer-home' src='public\instagram.ico'></img></a>

                            <a href='https://www.tiktok.com/@zedelivery'><img  className='icones-footer-home' src='public\tiktok.ico'></img></a>
                        </div>
                    </div>

                

                        {/* <div className='teste'>
                            <a href='#'>Termos de uso</a>

                            <a href='#'>Política de privacidade</a>
                        </div>

                        <div>

                            <span>ZE SOLUCOES TECNOLOGICAS DE COMERCIO DE BEBIDAS LTDA. - CNPJ: 37.657.197/0001-46
                            Rua Fradique Coutinho, 1632 - CEP: 05.416-002
                            Pinheiros - São Paulo/SP</span>
                        </div>

                        <div>
                            <span>BEBA COM MODERAÇÃO</span>
                        </div> */}
                </div>

                <div className='teste'>
                    <div className='termo-privacidade'>
                        <a href='#'>Termos de uso</a>

                        <a href='#'>Política de privacidade</a>
                    </div>
                                
                
                    <div id='endereco'>
                        <span>ZE SOLUCOES TECNOLOGICAS DE COMERCIO DE BEBIDAS LTDA. - CNPJ: 37.657.197/0001-46
                        Rua Fradique Coutinho, 1632 - CEP: 05.416-002
                        Pinheiros - São Paulo/SP</span>
                    </div>

                    <div id='moderacao'>
                        <span>BEBA COM MODERAÇÃO</span>
                    </div>

                </div>
        </>
    )
}

export default Footer