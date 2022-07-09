// import React, { forwardRef, useRef } from 'react';
import React from 'react';
import './App.css';
import ToDoForm from './components/todoForm';
import "./style.css"
import { io } from 'socket.io-client';
import TodoTask from './components/todoTask';
// import TodoTask from "./components/todoTask";
// type todoType = null | string[];
interface responseObj {
  res: string
}
function App() {
  const [todoState, setTodoState] = React.useState([] as string[]);

  React.useEffect(function () {
    const socket = io("http://localhost:4000/");
    socket.on("connect", () => {
      console.log(socket.id);
    })
    socket.emit("todo:create", "Go to shop and buy shirt and pants", (response: responseObj) => {
      console.log("Response from creating a todo:create event = ", response.res);
    });
  }, [])
  return (
    <div className="App">
      <h1 className='todo-header'>Todos</h1>
      <ToDoForm settodoList={setTodoState} />
      <div className='todoList'>
        {todoState.map((ele) => {
          return <TodoTask text={ele} key={ele + (Math.random() * 20)} />
        })}
      </div>
    </div>
  );
}

export default App;
