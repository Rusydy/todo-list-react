import "./styles.css"

export default function App() {
    return (
    <> {/* This is a React fragment. It lets us return multiple elements.*/}
        <form className="new-task">
            <div className="task-name"> {/* className is the React equivalent of class in HTML */}
                <label htmlFor="task-name">Task Name</label> {/* htmlFor is the React equivalent of for in HTML */}
                <input type="text" id="task-name" />
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
