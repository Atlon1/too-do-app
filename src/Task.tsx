import React from "react";

const Task = (props: any) => {



    return (
        <div className='list__ele' style={
            {
                backgroundColor: props.completed ? "green" : "white",
                padding: "20px"
            }
        }>
            <h1>{props.taskName}</h1>
            <button className='list__btn2'onClick={() => props.completedTask(props.id)}>Complete </button>
            <button className='list__btn' onClick={() => props.deleteTask(props.id)}> X </button>

        </div>
    )
}

export default Task;