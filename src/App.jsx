import "./styles.css"

export default function App() {
    const [newTask, setNewTask] = useState("");

    return (
    <>
        <form className="new-task">
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
            <li className="task">
                <label >Task 1</label>
                <button className="btn btn-danger">Delete</button>
            </li>
            <li className="task">
                <label >Task 2</label>
                <button className="btn btn-danger">Delete</button>
            </li>
        </ul>
    </>
    )
}
