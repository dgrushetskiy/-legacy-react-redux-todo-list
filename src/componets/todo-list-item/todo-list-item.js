import {connect} from "react-redux";
import {addTodo, removeTodo, toggleTodo} from '../../store';

export default function TodoListItem() {

    return (
        <div>
            <h1>Todos:</h1>
            <NewTodo/>
            <TodoList/>
        </div>
    );
}

const NewTodoApp = ({dispatch}) => {

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addTodo(event.target.title.value));
        event.target.reset();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="title" placeholder="new todo"/>
            <input type="submit" value="Add Todo"/>
        </form>
    );
};
const NewTodo = connect()(NewTodoApp);


const TodoListApp = ({todos, toggleTodo, removeTodo}) => {
    // const {, dispatch} = this.props;
    console.log('todos', todos)
    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.title}>
                    <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => toggleTodo(todo.id)}
                    />{" "}
                    {todo.title}{" "}
                    <button onClick={() => removeTodo(todo.id)}>delete</button>
                </li>
            ))}
        </ul>
    );
};

const mapStateToProps = (state) => ({
    todos: state,
});

const TodoList = connect(
    mapStateToProps,
    {
        toggleTodo,
        removeTodo
    }
)(TodoListApp);


