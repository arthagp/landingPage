import React from "react";
import TodoItem from "./TodoItem"

const Todos = (props) => {
  return (
    //menambahkan css
    <div style={{width: '40%', margin: '0 auto'}}>
      {/* pada parameter props tersebut nanti nya akan menerima argumen pada App.js, yang mana itu berisi objek todos */}
      {props.todos.map((todo) => {
        // return <Todoitem key={todo.id} todo ={todo}/>
        //TODO ITEM
        return <TodoItem 
        key={todo.id} 
        todo={todo} 
        // Memberikan functionnya kepada todoItem melalui props
        toggleCompleted={props.toggleCompleted}
        />
      })}
    </div>
  );
};

export default Todos;
