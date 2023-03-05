import React, {useState} from 'react';
import './App.css';
import Task from "./Task";


interface taskList {
    id: number,
    taskName: any
    completed: boolean
}

function App() {
    const [todoList, setTodoList] = useState([] as any)
    const [newTask, setNewTask] = useState('' as any)


    const handleClick = () => {
        const task: taskList = {
            id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
            taskName: newTask,
            completed : false
        };
        setTodoList([...todoList, task])
    }

    const deleteTask = (id: string) => {
        const newTodoList = todoList.filter((task: any) => {
            return task.id !== id;
        })
        setTodoList(newTodoList)
    }

    const completedTask = (id: string) => {
       setTodoList(todoList.map((task: any)=> {
           if (task.id === id) {
               return {...task, completed: true}
           } else {
               return task
           }
       }))
    }


    return (
        <div className='app'>
            <div className='addTask'>
                <input type='text' onChange={(e) => {
                    setNewTask(e.target.value)
                }}/>
                <button onClick={handleClick}>Add Task</button>
            </div>
            <div className='list'>
                {todoList.map((task: any) => {
                    return (
                        <Task
                            taskName={task.taskName}
                            id={task.id}
                            deleteTask={deleteTask}
                            completed = {task.completed}
                            completedTask= {completedTask}/>
                    )
                })}
            </div>
        </div>
    );
}

export default App;
