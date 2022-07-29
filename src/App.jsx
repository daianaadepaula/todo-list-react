

function App (){
    const tasks = ['Comprar pão', 'Finalizar módulo de JavaScript']

    function inputChange (event) {
        const task = event.target.value
        console.log(task)
    }

    function buttonClick(){

    }

    return (
        <div>
            <input placeholder="Digite a sua tarefa" onChange={inputChange} />
            <button>Adicionar Tarefa</button>

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