import React from 'react'
import Todos from './components/Todos'
import '../src/App.css'
import TodoForm from './components/TodoForm' // Lakukan import TodoForm
class App extends React.Component {
  // menggunakana object class agar dapat mendefinisikan sebuah objek di dlamnya, awalanya menggunakan functional component
  state = {
    todos: [
      {
        id: 1,
        title: 'Belajar React',
        completed: false
      },
      {
        id: 2,
        title: 'Mengimplmenetasikan React',
        completed: false
      },
      {
        id: 3,
        title: '  Mendeploy Project React di server',
        completed: false
      }
    ]
  }

  toggleCompleted = (todoId) => {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === todoId) {
        todo.completed = !todo.completed
      }
      return todo
    })
    this.setState({todos: updatedTodos})
  }

  addTodo = (todoTitle) => {
    const todos = this.state.todos
    if (todoTitle === '') {
      return
    }

    const newTodo = {
      id: todos.length + 1,
      title: todoTitle,
      completed: false
    }

    const updatedTodos = this.state.todos.concat(newTodo)
    this.setState({todos: updatedTodos})
  }

  render() {
    console.log(this.state.todos)
    return (
      <div style={{textAlign: 'center', padding: '12px'}}>
      <h1>My Todo List</h1>
      {/* jadi di dalam objek, jika ingin memanggil obek tersebut menggunakan this.di ikuti nama objek, di case kali ini menggunakan this.state.todos(merupakan array of object) */}
      <TodoForm addTodo={this.addTodo}/>
      <Todos 
      todos={this.state.todos}
      // Memberikan function kepada todoitem melaui props
      toggleCompleted={this.toggleCompleted}
      />
    </div>
    );
  }
}

export default App;