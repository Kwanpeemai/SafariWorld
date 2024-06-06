
function App(){
  return (
    <div className="container">
      <h1>Todo app</h1>
      <div>
      <input id="todolist" type="text" placeholder="please input here"/>
        <button>add</button>
      </div>
     
        <ul id="list">
            <li>task 1</li>
            <li>task 2</li>
            <li>task 3</li>
            <li>task 4</li>
            <li>task 5</li>
        </ul>   
    </div> 
)
}

export default App