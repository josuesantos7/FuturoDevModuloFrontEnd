import { useState } from 'react'
import "./Contador.css"


function Contador() {

    const [contador, setcontador] = useState(0)

    function addUnidade() {
        setcontador(contador + 1)
    }

    function removUnidade() {
        setcontador(contador -1)
    }



    return (
        <div className='container'>
            <h1>Contator</h1>
            <div className='card-contador'>
            
                <button className='button'  onClick={removUnidade}>-</button>

                <p>{contador}</p>

                <button className='button' onClick={addUnidade}>+</button>
            </div>

        </div>
    )
}

export default Contador