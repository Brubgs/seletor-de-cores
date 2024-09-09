import React, {useState} from 'react'

function Seletor() {
    const [cor, setCor] = useState('#FFFFFF')

    function MudancaCor(event){
        setCor(event.target.value)
    }
    return(
        <>
            <div className="containerSeletor">
                <h1>Seletor de cores</h1>
                <div className="cor" style={{backgroundColor : cor}}>
                    <p>Cor selecionada: {cor}</p>
                </div>
                <label>Selecione uma cor:</label>
                <input type='color' value={cor} onChange={MudancaCor}/>
            </div>
        </>
    )
}
export default Seletor
