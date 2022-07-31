import { useState } from 'react'
import { Item, Container } from './components/styles'

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
        <Container>
            <input placeholder="Digite a sua tarefa" onChange={inputChange} />
            <button onClick={buttonClick}>Adicionar Tarefa</button>

            <ul>
                {
                    tasks.map( (item, index) => (
                        <Item key={index}>{item}</Item>
                    ))
                }
            </ul>
            
        </Container>
    )

}

export default App