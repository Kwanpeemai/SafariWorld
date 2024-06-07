import Task, { ITask } from "./Task"
interface ITodoListProps {
    todoList: Array<ITask>
  onTaskToggle: (id: number) => void;
}

const TodoList = (props: ITodoListProps) => {
    const list = props.todoList
    return (
        <ul id="list">
         {
            list.map((task)=>(<Task task={task} key={task.id} onTaskToggle={props.onTaskToggle}/>))
         }
    </ul>   

    )
}
export default TodoList