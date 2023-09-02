import "./styles.css";
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

    function toggleTask(id, isCompleted) {
        setTasks((prevTasks) => {
            return prevTasks.map((task) => {
                if (task.id === id) {
                    return { ...task, isCompleted };
                }
                return task;
            });
        });
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
                <button className="btn">Add Task</button>
            </form>
            <h1 className="title"> Todo List </h1>
            <ul className="task-list">
                {tasks.map((task) => {
                    return (
                        <li className="task" key={task.id}>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={task.isCompleted}
                                    onChange={(e) =>
                                        toggleTask(task.id, e.target.checked)
                                    }
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
