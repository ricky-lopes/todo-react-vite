import { useState } from 'react'
import Todo from './components/Todo'
import TodoForm from './components/TodoForm';
import Search from './components/Search';
import Filter from './components/Filter';
import './App.css'


function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Treinar",
      category: "Saúde",
      isCompleted: false
    },
    {
      id: 2,
      text: "Arrumar a Casa",
      category: "Obrigações",
      isCompleted: false
    },
    {
      id: 3,
      text: "Estudar Programação",
      category: "Metas",
      isCompleted: false
    },
    {
      id: 4,
      text: "Estudar Inglês",
      category: "Metas",
      isCompleted: false
    },
    {
      id: 5,
      text: "Jogar",
      category: "Lazer",
      isCompleted: false
    },
    {
      id: 6,
      text: "Passear com Cachorro",
      category: "Obrigações",
      isCompleted: false
    }
  ]);

  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Asc");

  const addTodo = (text, category) => {
    const newTodos = [...todos, {
      id: Math.floor(Math.random() * 10000),
      text,
      category,
      isCompleted: false
    }];

    setTodos(newTodos);
  }

  const removeTodo = (id) => {
    const newTodos = [...todos];
    const filteredTodos = newTodos.filter(todo => todo.id !== id);
    setTodos(filteredTodos);
  }

  const completeTodo = (id) => {
    const newTodos = [...todos];
    newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo);
    setTodos(newTodos);
  }

  return <div className="app">
    <h1>Lista de Tarefas</h1>
    <TodoForm addTodo={addTodo} />
    <Search search={search} setSearch={setSearch} />
    <Filter filter={filter} setFilter={setFilter} setSort={setSort} />
    <div className="todo-list">
      {todos
        .filter((todo) => filter === 'All' ?
          true
          : filter === 'Completed'
          ? todo.isCompleted
          : !todo.isCompleted
        )
        .filter((todo) => 
          todo.text.toLowerCase().includes(search.toLowerCase())
        )
        .sort((a, b) =>
          sort === "Asc"
          ? a.text.localeCompare(b.text)
          : b.text.localeCompare(a.text)
        )
        .map((todo)=> (
        <Todo
            key={todo.id}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
    </div>
  </div>
}

export default App
