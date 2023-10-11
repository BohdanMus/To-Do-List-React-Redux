export const addTask = task => {
  return {
    type: 'ADD_TASK',
    task,
  };
};

export const editTask = task => {
  return {
    type: 'EDIT_TASK',
    task,
  };
};

export const deleteTask = id => {
  return {
    type: 'DELETE_TASK',
    id,
  };
};

export const setFilter = filter => {
  return {
    type: 'SET_FILTER',
    filter,
  };
};

export const toggleTaskStatus = id => {
  return {
    type: 'TOGGLE_TASK_STATUS',
    id,
  };
};
