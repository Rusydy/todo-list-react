import { Task } from "./Task";

export function TaskList({ tasks, toggleTask, deleteTask }) {
    return (
        <ul className="task-list">
            {tasks.length === 0 && "No tasks yet!"}
            {tasks.map((task) => (
                <Task key={task.id} {...task} toggleTask={toggleTask} deleteTask={deleteTask} />
            ))}
        </ul>
    );
}
