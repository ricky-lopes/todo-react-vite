import {useState} from 'react'

const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!value || !category) {
            window.alert("Preencha todos os campos!");
            return;
        } 
            
        addTodo(value, category)
        setValue("")
        setCategory("")
        window.alert("Tarefa criada com sucesso!");
    }

  return <div className='todo-form'>
      <h2>Criar Tarefa:</h2>
      <form onSubmit={handleSubmit}>
            <input type="text" value={value} placeholder='Digite o título' onChange={(e) => setValue(e.target.value)} />
            <select  value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">Selecione uma categoria</option>
                <option value="Saúde">Saúde</option>
                <option value="Obrigações">Obrigações</option>
                <option value="Metas">Metas</option>
                <option value="Lazer">Lazer</option>
            </select>
            <button type='submit'>Criar Tarefa</button>
      </form>
    </div>
}

export default TodoForm
