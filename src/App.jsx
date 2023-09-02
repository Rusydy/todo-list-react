import "./styles.css";
import { NewTaskForm } from "./NewTaskForm";
import { useState } from "react";

export default function App() {
    const [tasks, setTasks] = useState([]);

    function addTask(name) {
        setTasks((prevTasks) => {
            const task = { id: crypto.randomUUID(), name, isCompleted: false };

            return [...prevTasks, task];
        });
    }

    function toggleTask(id) {
        setTasks((prevTasks) => {
            return prevTasks.map((task) => {
                if (task.id === id) {
                    return { ...task, isCompleted: !task.isCompleted };
                }
                return task;
            });
        });
    }

    function deleteTask(id) {
        setTasks((prevTasks) => {
            return prevTasks.filter((task) => task.id !== id);
        });
    }

    return (
        <>
            <NewTaskForm onSubmit={addTask} />
            <h1 className="title"> Todo List </h1>
            <ul className="task-list">
                {tasks.length === 0 && "No tasks yet!"}
                {tasks.map((task) => {
                    return (
                        <li className="task" key={task.id}>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={task.isCompleted}
                                    onChange={(e) => toggleTask(task.id)}
                                />
                                {task.name}
                            </label>

                            <button
                                onClick={() => deleteTask(task.id)}
                                className="btn btn-danger"
                            >
                                Delete
                            </button>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}
