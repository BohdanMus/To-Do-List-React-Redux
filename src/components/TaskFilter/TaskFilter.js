import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/taskActions';
import { FilterButton, FilterWrapper } from './TaskFilter.styled';

const TaskFilter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const [activeFilter, setActiveFilter] = useState(filter);

  const handleFilterChange = newFilter => {
    dispatch(setFilter(newFilter));
    setActiveFilter(newFilter);
  };

  return (
    <FilterWrapper>
      <FilterButton
        onClick={() => handleFilterChange('ALL')}
        active={activeFilter === 'ALL'}
      >
        All
      </FilterButton>
      <FilterButton
        onClick={() => handleFilterChange('COMPLETED')}
        active={activeFilter === 'COMPLETED'}
      >
        Completed
      </FilterButton>
      <FilterButton
        onClick={() => handleFilterChange('INCOMPLETE')}
        active={activeFilter === 'INCOMPLETE'}
      >
        Incomplete
      </FilterButton>
    </FilterWrapper>
  );
};

export default TaskFilter;
