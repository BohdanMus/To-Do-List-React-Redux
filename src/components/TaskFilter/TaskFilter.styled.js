import { ToggleButton } from 'react-bootstrap';
import styled from 'styled-components';

export const FilterWrapper = styled.div`
  display: flex;
  padding: 6px 10px;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
`;

export const FilterButton = styled(ToggleButton)`
  &.btn {
    border: none;
    border-radius: 16px;
    padding: 8px 16px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
    background-color: #e2e2e2;
    color: #7c7c7c;

    &:hover {
      background-color: #e2e2e2;
      color: #7c7c7c;
    }

    &:focus {
      background-color: #e2e2e2;
      color: #7c7c7c;
    }

    &.btn-primary.active {
      background-color: #1f2937;
      color: #fff;
    }
  }
`;
