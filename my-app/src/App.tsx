import React from 'react';
import './App.css';
import "./style.css"
import { io } from 'socket.io-client';

interface responseObj {
  res: string
}
function App() {
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
    </div>
  );
}

export default App;
