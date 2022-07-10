import React from 'react';
import './App.css';
import ToDoForm from './components/todoForm';
import "./style.css"
import TodoTask from './components/todoTask';
import socket from "./components/socketInstance";
// interface responseObj {
//   res: string
// }
function App() {
  const [todoState, setTodoState] = React.useState([] as string[]);

  React.useEffect(function () {
    socket.on("connect", () => {
      console.log(socket.id);
    })
    socket.on("create:todo", (todoTask) => {
      setTodoState(function (oldState) {
        return [...oldState, todoTask];
      })
    })
    socket.on("delete:todo", (indexOfTodo) => {
      setTodoState(function (oldState) {
        return oldState.map((ele, index) => {
          if (index === indexOfTodo) {
            return "deleted";
          }
          else
            return ele;
        })
      })
    })
  }, [])
  return (
    <div className="App">
      <h1 className='todo-header'>Todos</h1>
      <ToDoForm settodoList={setTodoState} todoState={todoState} />
      <div className='todoList'>
        {todoState.map((ele) => {
          return <TodoTask text={ele} key={ele + (Math.random() * 20)} todoState={todoState} settodoList={setTodoState} />
        })}
      </div>
    </div>
  );
}

export default App;
