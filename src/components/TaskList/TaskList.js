import TaskItem from 'components/TaskItem/TaskItem';
import { useSelector } from 'react-redux';
import { NoTasksMessage } from './TaskList.styled';

const TaskList = () => {
  const tasks = useSelector(state => state.tasks.tasks);
  const filter = useSelector(state => state.tasks.filter); // Отримуємо значення фільтра

  // Фільтруємо завдання відповідно до фільтра
  const filteredTasks = tasks.filter(task => {
    if (filter === 'ALL') {
      return true; // Показувати всі завдання
    } else if (filter === 'COMPLETED') {
      return task.completed; // Показувати завдання, що виконані
    } else if (filter === 'INCOMPLETE') {
      return !task.completed; // Показувати невиконані завдання
    }
    return true;
  });

  return (
    <div>
      {filteredTasks.length === 0 ? ( // Перевірка, чи масив порожній
        <NoTasksMessage>No tasks available</NoTasksMessage>
      ) : (
        filteredTasks.map(task => <TaskItem key={task.id} task={task} />)
      )}
    </div>
  );
};

export default TaskList;
