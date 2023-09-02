import "./styles.css";
import { NewTaskForm } from "./NewTaskForm";
import { useState } from "react";
import { TaskList } from "./TaskList";

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
            <TaskList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
        </>
    );
}
