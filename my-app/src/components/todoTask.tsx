import "../style.css"
interface todoListInterface {
    text: string
}
function TodoTask(props: todoListInterface) {
    return (
        <div className="todoTask todoList-wrapper">{props.text}
            <button type="button" className="todo-List-button1">✔️</button>
            <button type="button" className="todo-List-button2">❌</button>
        </div>
    )
}
export default TodoTask;