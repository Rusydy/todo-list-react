import { useState } from "react";

export function NewTaskForm({onSubmit}) {
    const [newTask, setNewTask] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        onSubmit(newTask);

        setNewTask("");
    }

    return (
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
    );
}
