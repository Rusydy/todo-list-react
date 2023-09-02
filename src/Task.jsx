export function Task({ id, name, isCompleted, toggleTask, deleteTask }) {
    return (
        console.log(id),
        console.log(name),
        console.log(isCompleted),

        <li className="task" key={id}>
            <label>
                <input
                    type="checkbox"
                    checked={isCompleted}
                    onChange={(e) => toggleTask(id)}
                />
                {name}
            </label>

            <button
                onClick={() => deleteTask(id)}
                className="btn btn-danger"
            >
                Delete
            </button>
        </li>
    );
}