import TaskItem from 'components/TaskItem/TaskItem';
import { useSelector } from 'react-redux';
import { NoTasksMessage } from './TaskList.styled';

const TaskList = () => {
  const tasks = useSelector(state => state.tasks.tasks);
  const filter = useSelector(state => state.tasks.filter);

  const filteredTasks = tasks.filter(task => {
    if (filter === 'ALL') {
      return true;
    } else if (filter === 'COMPLETED') {
      return task.completed;
    } else if (filter === 'INCOMPLETE') {
      return !task.completed;
    }
    return true;
  });

  return (
    <div>
      {filteredTasks.length === 0 ? (
        <NoTasksMessage>No tasks available</NoTasksMessage>
      ) : (
        filteredTasks.map(task => <TaskItem key={task.id} task={task} />)
      )}
    </div>
  );
};

export default TaskList;
