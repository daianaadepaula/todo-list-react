import { useState } from 'react'

function App (){
    const [tasks, setTasks] = useState([])
    const [inputValue, setinputValue] = useState()     

    function inputChange (event) {
        setinputValue (event.target.value)        
    }

    function buttonClick(){
        setTasks([ ...tasks, inputValue])
    }
    

    return (
        <div>
            <input placeholder="Digite a sua tarefa" onChange={inputChange} />
            <button onClick={buttonClick}>Adicionar Tarefa</button>

            <ul>
                {
                    tasks.map( item => (
                        <li>{item}</li>
                    ))
                }
            </ul>
            
        </div>
    )

}

export default App