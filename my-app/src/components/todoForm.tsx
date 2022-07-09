function ToDoForm() {
    return <form action="" className="todo-form">
        <label htmlFor="todo" className="todo-label">Enter Todo Task</label>
        <div className="input-wrapper">
            <input type="text" name="todoTask" id="todo" className="input-todo" required maxLength={50} />
            <button type="submit" className="submit-button">✅</button>
        </div>
    </form>
}
export default ToDoForm;