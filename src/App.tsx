import React, {useState} from 'react';
import './App.css';

interface taskList {
    id: number,
    taskName: any
}

function App() {
    const [todoList, setTodoList] = useState([] as any)
    const [newTask, setNewTask] = useState('' as any)



const handleClick = () => {
        const task: taskList = {
            id: todoList.length === 0 ? 1 : todoList[todoList.length -1].id + 1,
            taskName: newTask,
        };
    setTodoList([...todoList, task])
}

const deleteTask = (id :string) => {
        const newTodoList = todoList.filter((task: any)=> {
            return task.id !== id;
        })
    setTodoList(newTodoList)
}




    return (
        <div className='app'>
            <div className='addTask'>
                <input type='text' onChange={(e) => {setNewTask(e.target.value)}}/>
                <button onClick={handleClick}>Add Task</button>
            </div>
            <div className='list'>
                {todoList.map((task:any) =>{
                    return (
                        <div>
                        <h1>{task.taskName}</h1>
                            <button onClick={() => deleteTask(task.id)}> X </button>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default App;
