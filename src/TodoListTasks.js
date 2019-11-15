import React from 'react';
import './App.css';
import TodoListTask from "./TodoListTask";

class TodoListTasks extends React.Component {
    render = () => {

    let tasksElements=this.props.tasks.map( (t) => {
        return <TodoListTask title={t.title} isDone={t.isDone} priority={t.priority}/>;
    } );


    /*let tasksElementsFake = [
        <TodoListTask title={tasks[0].title} isDone={tasks[0].isDone}/>,
        <TodoListTask title={tasks[1].title}  isDone={tasks[1].isDone}/>,
        <TodoListTask title={tasks[2].title}  isDone={tasks[2].isDone}/>
    ]*/


        return (
            <div className="todoList-tasks">
                {tasksElements}
            </div>
        );
    }
}

export default TodoListTasks;

