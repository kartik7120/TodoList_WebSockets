import React from "react";
import socket from "./socketInstance";
interface propInterface {
    settodoList: React.Dispatch<React.SetStateAction<string[]>>,
    todoState: string[]
}
function ToDoForm(props: propInterface) {
    const [formState, setFormState] = React.useState("");
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const val = e.target.value;
        setFormState(val);
    }
    function submitFunction(e: React.FormEvent): void {
        e.preventDefault();
        const text: string = formState;
        socket.emit("create:todo", text);
        setFormState("");
        props.settodoList(function (oldState) {
            return [...oldState, text];
        })
    }
    return <form action="" className="todo-form" onSubmit={submitFunction}>
        <label htmlFor="todo" className="todo-label">Enter Todo Task</label>
        <div className="input-wrapper">
            <input type="text" name="todoTask" id="todo" className="input-todo" required maxLength={50} value={formState} onChange={handleChange} />
            <button type="submit" className="submit-button">✅</button>
        </div>
    </form>
}
export default ToDoForm;