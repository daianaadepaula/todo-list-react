import { useState } from "react";
import { Item, Container, TodoList, Input, Button, List } from "./components/styles";

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setinputValue] = useState();

  function inputChange(event) {
    setinputValue(event.target.value);
  }

  function buttonClick() {
    setTasks([...tasks, inputValue]);
  }

  return (
    <Container>
      <TodoList>
        <Input placeholder="Digite a sua tarefa" onChange={inputChange} />
        <Button onClick={buttonClick}>Adicionar Tarefa</Button>

        <List>
          {tasks.map((item, index) => (
            <Item key={index}>{item}</Item>
          ))}
        </List>
      </TodoList>
    </Container>
  );
}

export default App;
