import React from "react";
import {FilterValuesType, TaskType} from "./App";



export type TodolistPropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: number) => void
    changeFilter:(filter:FilterValuesType) => void
}

export const Todolist = (props: TodolistPropsType) => {

    const tasks = props.tasks.map((t)=>
        <li key={t.id}>
            <input type="checkbox" checked={t.isDone}/>
            <span>{t.title}</span>
            <button onClick={()=>props.removeTask(t.id)}>x</button>
        </li>
    )
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {tasks}
            </ul>
            <div>
                <button onClick={()=>props.changeFilter('all')}>All</button>
                <button onClick={()=>props.changeFilter('active')}>Active</button>
                <button onClick={()=>props.changeFilter('completed')}>Completed</button>
            </div>
        </div>
    );
}