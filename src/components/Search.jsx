const Search = ({search, setSearch}) => {
  return (
  <div className="search">
        <h2>Pesquisar:</h2>
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Digite aqui para pesquisar uma tarefa" />
    </div>
)}

export default Search
