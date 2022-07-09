import "../style.css"
interface todoListInterface {
    text: string
}
function TodoTask(props: todoListInterface) {
    return <div className="todoTask">{props.text}</div>
}
export default TodoTask;