import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from 'redux/taskActions';

import {
  FormWrapper,
  ModalButton,
  StyledForm,
  StyledFormCheck,
  StyledFormControl,
  StyledFormTextArea,
  StyledModal,
  TaskFormButton,
} from './TaskForm.styled';

const TaskForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [showModal, setShowModal] = useState(false); // Додайте стан для відображення модального вікна
  const [completed, setCompleted] = useState(false); // Додайте стан для статусу завдання (виконано/невиконано)

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSubmit = () => {
    if (title.trim() === '') {
      return; // Валідація полів (назва не може бути порожньою).
    }

    const newTask = {
      id: nanoid(),
      title,
      description,
      completed,
    };

    dispatch(addTask(newTask));
    setTitle('');
    setDescription('');
    setCompleted(false);
    handleCloseModal(); // Закрийте модальне вікно після додавання завдання
  };

  return (
    <FormWrapper>
      <TaskFormButton onClick={handleShowModal}>+ Add Task</TaskFormButton>
      <StyledModal show={showModal} onHide={handleCloseModal} backdrop="true">
        <StyledModal.Header closeButton>
          <StyledModal.Title>Add Task</StyledModal.Title>
        </StyledModal.Header>
        <StyledModal.Body>
          <StyledForm>
            <StyledForm.Group>
              <StyledFormControl
                type="text"
                placeholder="Title"
                value={title}
                onChange={e => setTitle(e.target.value)}
              />
            </StyledForm.Group>
            <StyledForm.Group>
              <StyledFormTextArea
                as="textarea"
                rows={3}
                placeholder="Description"
                value={description}
                onChange={e => setDescription(e.target.value)}
              />
            </StyledForm.Group>
            <StyledForm.Group>
              <StyledFormCheck
                type="checkbox"
                label="Completed"
                checked={completed}
                onChange={() => setCompleted(!completed)}
              />
            </StyledForm.Group>
          </StyledForm>
        </StyledModal.Body>
        <StyledModal.Footer>
          <ModalButton variant="danger" onClick={handleCloseModal}>
            Close
          </ModalButton>
          <ModalButton onClick={handleSubmit}>Add Task</ModalButton>
        </StyledModal.Footer>
      </StyledModal>
    </FormWrapper>
  );
};

export default TaskForm;
