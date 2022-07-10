import React from "react";
import "../style.css"
import socket from "./socketInstance";
interface todoListInterface {
    text: string,
    settodoList: React.Dispatch<React.SetStateAction<string[]>>,
    todoState: string[]
}
function TodoTask(props: todoListInterface) {
    function handleTaskCompleted(e: React.MouseEvent<HTMLElement>) {

    }
    function handleTaskRemoved(e: React.MouseEvent<HTMLElement>) {
        const indexOfTodo = props.todoState.indexOf(props.text);
        socket.emit("delete:todo", indexOfTodo);
        props.settodoList(function (oldState) {
            return oldState.map((ele, index) => {
                if (index === indexOfTodo) {
                    return "deleted";
                }
                else
                    return ele;
            })
        })
    }
    return (
        <>
            {
                props.text === "deleted" ? "" : (<div className="todoTask todoList-wrapper">{props.text}
                    <button type="button" className="todo-List-button1" onClick={handleTaskCompleted}>✔️</button>
                    <button type="button" className="todo-List-button2" onClick={handleTaskRemoved}>❌</button>
                </div>)
            }
        </>
    )
}
export default TodoTask;