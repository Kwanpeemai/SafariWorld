import React, { useEffect, useRef } from "react";
import TodoList from "./TodoList";
import { ITask } from "./Task";

const FormAddTask = () => {
  const [todoList, setTodoList] = React.useState(Array<ITask>);
  const [inputTask, setInputTask] = React.useState("");
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => {
    ref.current && ref.current.focus();
  }, []);
  const handleClick = () => {
    const newTask: ITask = {
      id: todoList.length + 1,
      title: inputTask,
      completed: false,
    };
    const newTodoList = [...todoList, newTask];
    setTodoList(newTodoList);
    setInputTask("");
  };

  const handleToggle = (id: number) => {
    setTodoList((prevTodoList) =>
      prevTodoList.map((item) =>
        item.id == id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return (
    <div className="container">
      <div>
        <h1>Todo App</h1>
        <input
          ref={ref}
          type="text"
          placeholder="please input here"
          onChange={(e) => setInputTask(e.target.value)}
          value={inputTask}
        />
        <button type="button" onClick={() => handleClick()}>
          add
        </button>
      </div>
      <TodoList todoList={todoList} onTaskToggle={handleToggle} />
    </div>
  );
};

export default FormAddTask;
