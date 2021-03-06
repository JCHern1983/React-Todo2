import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return (
        <div className="todo-list">
            {props.tasks.map(item => (
                <Todo 
                    key={item.id}
                    item={item}
                    toggleItem={props.toggleItem}
                />
            ))}
            <button onClick={props.completedTask}>Clear Completed Task</button>
        </div>
    )
}

export default TodoList; 