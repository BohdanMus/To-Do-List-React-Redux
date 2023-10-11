import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/taskActions';
import { FilterButton, FilterWrapper } from './TaskFilter.styled';

const TaskFilter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleFilterChange = filter => {
    dispatch(setFilter(filter));
  };

  return (
    <FilterWrapper>
      <FilterButton
        variant="outline-primary"
        onClick={() => handleFilterChange('ALL')}
        active={filter === 'ALL'}
      >
        All
      </FilterButton>
      <FilterButton
        variant="outline-success"
        onClick={() => handleFilterChange('COMPLETED')}
        active={filter === 'COMPLETED'}
      >
        Completed
      </FilterButton>
      <FilterButton
        variant="outline-danger"
        onClick={() => handleFilterChange('INCOMPLETE')}
        active={filter === 'INCOMPLETE'}
      >
        Incomplete
      </FilterButton>
    </FilterWrapper>
  );
};

export default TaskFilter;
