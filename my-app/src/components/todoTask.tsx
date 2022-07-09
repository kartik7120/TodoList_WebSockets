interface todoListInterface {
    text:string
}
function TodoTask(props:todoListInterface) {
    return <h1>{props.text}</h1>
}
export default TodoTask;