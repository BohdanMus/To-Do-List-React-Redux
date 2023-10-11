import { Button, Form, Modal } from 'react-bootstrap';
import styled from 'styled-components';

// Стилі для зовнішнього контейнера форми
export const FormWrapper = styled.div`
  margin: 20px;
  display: flex;
  justify-content: center;
`;

// Стилі для кнопки "Add Task"
export const TaskFormButton = styled(Button)`
  background-color: #ff8c00;
  border: none;
  color: #fff;
  border-radius: 16px;

  &:hover {
    background-color: #ff6347;
  }
`;

// Стилі для модального вікна
export const StyledModal = styled(Modal)`
  background-color: rgba(0, 0, 0, 0.5);
`;

// Стилі для форми в модальному вікні
export const StyledForm = styled(Form)`
  background-color: #fff;
  padding: 20px;
  border-radius: 16px;
`;

// Стилі для текстового поля назви завдання
export const StyledFormControl = styled(Form.Control)`
  margin-bottom: 10px;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 16px;
`;

// Стилі для текстового поля опису завдання
export const StyledFormTextArea = styled(Form.Control)`
  margin-bottom: 10px;
  width: 100%;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 16px;
`;

// Стилі для чекбоксу "Completed"
export const StyledFormCheck = styled(Form.Check)`
  margin-bottom: 10px;
  label {
    font-weight: normal;
  }
`;

// Стилі для модального вікна
export const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const ModalButton = styled(Button)`
  border-radius: 16px;
`;
