import styled from 'styled-components';

export const FilterWrapper = styled.div`
  display: flex;
  padding: 6px 10px;
  flex-direction: row;
  /* align-items: flex-start; */
  gap: 10px;
  justify-content: center;
`;

export const FilterButton = styled.button`
  border-radius: 16px;
  border: 1px solid #e2e2e2;
  padding: 8px 16px;
  background-color: #e2e2e2;
  color: #7c7c7c;
  cursor: pointer;

  &:hover,
  &:focus {
    background: #1f2937;
    color: #ffffff;
  }
`;
