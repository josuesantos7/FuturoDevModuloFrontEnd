import "./Header.css"


function Header() {

    return (

        <div className="tema">
            <div className='nav-bar'>
                <figure className="figureLogo">
                    <img src='https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-web.imgix.net%2Fstatic%2Fimg%2Fwhite-logo.png%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D121%26h%3D40%26dpr%3D2%26fm%3Dpng&w=128&q=75' width="121" height="40"></img>
                </figure>

                <button className="button-sigin">Entrar</button>
            </div>
        </div>
    )
}

export default Header