import { Button, Form, Modal, ToggleButton } from 'react-bootstrap';
import styled from 'styled-components';

export const TaskItemWrapper = styled.div`
  margin: 16px;
  display: flex;
  padding: 18px 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 16px;
  background-color: #fde99d;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

export const TaskTitle = styled.h3`
  margin: 0;
`;

export const TaskDescription = styled.p`
  margin: 0;
`;

export const StatusText = styled.p`
  margin: 0;
`;

export const EditButton = styled(Button)`
  padding: 8px;
  border-radius: 16px;
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

export const ModalToggleButton = styled(ToggleButton)`
  border-radius: 16px;
  border: none;
  display: flex;
  align-items: center;
`;
