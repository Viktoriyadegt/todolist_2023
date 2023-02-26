import React from 'react';
import './App.css';
import {Todolist} from "./Todolist";

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

export function App() {

    const tasks1: Array<TaskType> = [
        {id: 1, title: 'CSS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'React', isDone: false},
    ]
    const tasks2: Array<TaskType> = [
        {id: 1, title: 'Naruto', isDone: true},
        {id: 2, title: 'Marvel', isDone: false},
        {id: 3, title: 'Jinny and Georgia', isDone: true},
    ]

    return (
        <div className={'App'}>
            <Todolist title={'What to learn'} tasks={tasks1}/>
            <Todolist title={'Movies'} tasks={tasks2}/>
        </div>
    )
}
