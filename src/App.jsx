import { useState } from "react";
import { Item, Container, TodoList, Input, Button, List, Icon } from "./components/styles";

function App() {
	const [task, setTask] = useState("");
	const [listTask, setListTask] = useState([]);

  function inputChange(event) {
    setTask(event.target.value);
  }

  function addTask () {
    if (!task) return alert("Preencha com uma tarefa");
    const newTask = {
      id: Math.random(),
      task: task,
      checked: false,
    };
    setListTask([...listTask, newTask]);
    setTask("");
  };

  function removeTask (id) {
    const newList = listTask.filter((task) => task.id !== id);
    setListTask(newList);
  };

  function toggleChecked (id, checked) {
    const index = listTask.findIndex((task) => task.id === id);
    const newList = listTask;
    newList[index].checked = !checked;
    setListTask([...newList]);
  };

  return (
    <Container>
      <TodoList>
        <Input value={task} placeholder="Digite a sua tarefa" onChange={inputChange} />		
        <Button  onClick={addTask}>Adicionar Tarefa</Button>

        <List>
			
		{listTask.map((task) => (
            <Item Item checked={task.checked} key={task.id}>
				<Icon  onClick={() => toggleChecked(task.id, task.checked)}>
					<i class='bx bx-check'></i>
				</Icon>
					{task.task}
				<Icon onClick={() => removeTask(task.id)}>
		  			<i class='bx bx-trash'></i>
		  		</Icon>
			</Item>
          ))}
		  
        </List>
      </TodoList>
    </Container>
  );
}

export default App;
