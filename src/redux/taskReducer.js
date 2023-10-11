const initialState = {
  tasks: [], // Початковий стан для завдань
  filter: 'ALL', // Початковий стан для фільтрації
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [...state.tasks, action.task],
      };
    case 'EDIT_TASK':
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.task.id ? action.task : task
        ),
      };
    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.id),
      };
    case 'SET_FILTER':
      return {
        ...state,
        filter: action.filter,
      };
    default:
      return state;
  }
};

export default taskReducer;
