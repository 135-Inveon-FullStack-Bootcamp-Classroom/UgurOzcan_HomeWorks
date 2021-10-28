const ToDoList = ({ todos, setTodos }) => {
  return (
    <div className="container">
      <table class="table">
        <thead>
          <tr>
            <th scope="col"># ToDoList</th>
            <th scope="col"> </th>

          </tr>
        </thead>
        <tbody>
        {todos.map((item, index) => (
          <tr>
          <th scope="row" key={item.text + index}> {item.text}</th>
            <th><button
              onClick={() => {
                    const newTodos = [
                        ...todos.filter((filterItem) => filterItem.text !== item.text),
                      ];
                      setTodos(newTodos);
                }
              }
            >
              Sil
            </button></th>
          </tr>))}
        </tbody>
      </table>

    </div>


  );
};

export default ToDoList;