export interface ITask {
  id: number;
  title: string;
  completed: boolean;
}
interface ITaskProps {
  task: ITask;
  onTaskToggle: (id: number) => void;
}

const Task = (props: ITaskProps) => {
  return (
    <li>
      <input className="inputTask" onClick={()=>props.onTaskToggle(props.task.id)} type="checkbox" checked={props.task.completed} />{" "}
      <del>{props.task.title}</del>
    </li>
  );
};
export default Task;
