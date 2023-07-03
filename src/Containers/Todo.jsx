import './Todo.css'
const Todo = ({removeTask, todo}) => {
    return (
        <div className='todo-task' key={todo.id}>   
            <p className='todo-task-text'>{todo.task}</p>
            <span className='todo-delete-btn' onClick={() => removeTask(todo.id)}>X</span>
        </div>
    );
};
export default Todo;