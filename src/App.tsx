import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

export type FilterValuesType = 'all' | 'active' | 'completed'


export function App() {

    const [tasks, setTasks] = useState<Array<TaskType>>([
        {id: 1, title: 'CSS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'React', isDone: false}
    ])

    const [filter, setFilter] = useState<FilterValuesType>('all')

    const changeFilter = (filter:FilterValuesType) => {
        return setFilter(filter)
    }

    let filteredTasks:Array<TaskType>=tasks

    if(filter==='active'){
        filteredTasks = tasks.filter(f=>!f.isDone)
    }
    if(filter==='completed'){
        filteredTasks = tasks.filter(f=>f.isDone)
    }


    const removeTask = (taskId: number) => {
        return setTasks(tasks.filter((task) => task.id !== taskId))
    }

    return (
        <div className={'App'}>
            <Todolist
                title={'What to learn'}
                tasks={filteredTasks}
                removeTask={removeTask}
                changeFilter={changeFilter}
            />
        </div>
    )
}
