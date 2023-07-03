import { useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Todo from './Containers/Todo';

function App() {
  const [todos, setTodos] = useState([]);

  const addTask = (userInput) => {
    if(userInput && userInput.trim() !== '') {
      const createTask = { id: Date.now(24 * 3600 * 10000), task: userInput, complete: false};
      setTodos([...todos, createTask]);
      localStorage.setItem('tasks', JSON.stringify([...todos, createTask]));
    };
  };


  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
    localStorage.setItem('tasks', JSON.stringify(todos.filter((todo) => todo.id !== id)));
  };


  useEffect(() => {
    if(localStorage.getItem('tasks')) {
      const storage = JSON.parse(localStorage.getItem('tasks'));
      setTodos(storage);
    }
  }, []);


  return (
  <div className='todo-list'>
    <div className='container'>
      <h1 className='todos-count'>Todos: {todos.length}</h1>
      <Header addTask={addTask}/>
        <div className='todo-block'>
          { 
           todos.map((todo) => {
            return (
            <Todo key={todo.id} todo={todo} removeTask={removeTask}/>
            )
          })
        }
      </div>
    </div>
  </div>
  );
};
export default App;