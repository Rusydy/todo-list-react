import "./styles.css"
import { useState } from "react";

export default function App() {
    const [newTask, setNewTask] = useState("");
    const [tasks, setTasks] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();

        setTasks((prevTasks) => {
            const id = crypto.randomUUID();
            const name = newTask;
            const isCompleted = false;
            const task = { id, name, isCompleted };

            return [...prevTasks, task];
        });

        setNewTask("");
    }

    return (
    <>
        <form onSubmit={handleSubmit} className="new-task">
            <div className="task-name">
                <label htmlFor="task-name">Task Name</label>
                <input 
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    type="text" 
                    id="task-name" 
                />
            </div>
            <button className="btn" >Add Task</button>
        </form>
        <h1 className="title"> Todo List </h1>
        <ul className="task-list">
            {tasks.map((task) => {
                return (
                    <li className="task" key={task.id}>
                        <label type="checkbox" checked={task.isCompleted} >{task.name}</label>
                        <button className="btn btn-danger">Delete</button>
                    </li>
                )
            })}
        </ul>
    </>
    )
}
