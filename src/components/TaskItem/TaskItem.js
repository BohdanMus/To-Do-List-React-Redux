// import { useState } from 'react';
// import { ToggleButton } from 'react-bootstrap';
// import Modal from 'react-bootstrap/Modal';
// import { useDispatch } from 'react-redux';
// import { deleteTask, editTask } from '../../redux/taskActions';
// import {
//   ButtonWrapper,
//   EditButton,
//   ModalButton,
//   StatusText,
//   StyledForm,
//   StyledFormControl,
//   StyledFormTextArea,
//   StyledModal,
//   TaskDescription,
//   TaskItemWrapper,
//   TaskTitle,
// } from './TaskItem.styled';

// const TaskItem = ({ task }) => {
//   const dispatch = useDispatch();
//   const [showEditModal, setShowEditModal] = useState(false);
//   const [editedTitle, setEditedTitle] = useState(task.title);
//   const [editedDescription, setEditedDescription] = useState(task.description);
//   const [isCompleted, setIsCompleted] = useState(task.completed);

//   const handleShowEditModal = () => {
//     setShowEditModal(true);
//   };

//   const handleCloseEditModal = () => {
//     setShowEditModal(false);
//   };

//   const handleEdit = () => {
//     if (editedTitle.trim() === '') {
//       return;
//     }

//     const updatedTask = {
//       ...task,
//       title: editedTitle,
//       description: editedDescription,
//       completed: isCompleted,
//     };

//     dispatch(editTask(updatedTask));
//     handleCloseEditModal();
//   };

//   const handleDelete = () => {
//     dispatch(deleteTask(task.id));
//   };

//   const toggleStatus = () => {
//     const updatedTask = {
//       ...task,
//       completed: !isCompleted,
//     };

//     dispatch(editTask(updatedTask));
//     setIsCompleted(!isCompleted);
//   };

//   return (
//     <TaskItemWrapper>
//       <TaskTitle>{task.title}</TaskTitle>
//       <TaskDescription>{task.description}</TaskDescription>
//       <StatusText>
//         Status: {isCompleted ? 'Completed' : 'Incomplete'}
//       </StatusText>
//       <ButtonWrapper>
//         <ToggleButton onClick={toggleStatus}>Status</ToggleButton>
//         <EditButton variant="success" onClick={handleShowEditModal}>
//           Edit
//         </EditButton>
//         <EditButton variant="danger" onClick={handleDelete}>
//           Delete
//         </EditButton>
//       </ButtonWrapper>
//       <Modal show={showEditModal} onHide={handleCloseEditModal}>
//         <Modal.Header closeButton>
//           <Modal.Title>Edit Task</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <StyledForm>
//             <StyledForm.Group>
//               <StyledFormControl
//                 type="text"
//                 value={editedTitle}
//                 onChange={e => setEditedTitle(e.target.value)}
//               />
//             </StyledForm.Group>
//             <StyledForm.Group>
//               <StyledFormTextArea
//                 as="textarea"
//                 rows={3}
//                 value={editedDescription}
//                 onChange={e => setEditedDescription(e.target.value)}
//               />
//             </StyledForm.Group>
//           </StyledForm>
//         </Modal.Body>
//         <StyledModal.Footer>
//           <ModalButton variant="danger" onClick={handleCloseEditModal}>
//             Close
//           </ModalButton>
//           <ModalButton variant="primary" onClick={handleEdit}>
//             Save Changes
//           </ModalButton>
//         </StyledModal.Footer>
//       </Modal>
//     </TaskItemWrapper>
//   );
// };

// export default TaskItem;

import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { deleteTask, editTask } from '../../redux/taskActions';
import {
  ButtonWrapper,
  EditButton,
  ModalButton,
  ModalToggleButton,
  StatusText,
  StyledForm,
  StyledFormControl,
  StyledFormTextArea,
  StyledModal,
  TaskDescription,
  TaskItemWrapper,
  TaskTitle,
} from './TaskItem.styled';

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();
  const [showEditModal, setShowEditModal] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);
  const [editedDescription, setEditedDescription] = useState(task.description);
  const [isCompleted, setIsCompleted] = useState(task.completed);

  const handleShowEditModal = () => {
    setShowEditModal(true);
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
  };

  const handleEdit = () => {
    if (editedTitle.trim() === '') {
      return;
    }

    const updatedTask = {
      ...task,
      title: editedTitle,
      description: editedDescription,
      completed: isCompleted,
    };

    dispatch(editTask(updatedTask));
    handleCloseEditModal();
  };

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  const toggleStatus = () => {
    const updatedTask = {
      ...task,
      completed: !isCompleted,
    };

    dispatch(editTask(updatedTask));
    setIsCompleted(!isCompleted);
  };

  return (
    <TaskItemWrapper>
      <TaskTitle>{task.title}</TaskTitle>
      <TaskDescription>{task.description}</TaskDescription>
      <StatusText>
        Status: {isCompleted ? 'Completed' : 'Incomplete'}
      </StatusText>
      <ButtonWrapper>
        <ModalToggleButton
          type="checkbox"
          checked={isCompleted}
          onClick={toggleStatus}
          style={{
            backgroundColor: isCompleted ? 'green' : 'red', // Колір фону для увімкненої і вимкненої галочки
            color: 'white',
          }}
        >
          Status
        </ModalToggleButton>
        <EditButton variant="primary" onClick={handleShowEditModal}>
          Edit
        </EditButton>
        <EditButton variant="danger" onClick={handleDelete}>
          Delete
        </EditButton>
      </ButtonWrapper>
      <Modal show={showEditModal} onHide={handleCloseEditModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <StyledForm>
            <StyledForm.Group>
              <StyledFormControl
                type="text"
                value={editedTitle}
                onChange={e => setEditedTitle(e.target.value)}
              />
            </StyledForm.Group>
            <StyledForm.Group>
              <StyledFormTextArea
                as="textarea"
                rows={3}
                value={editedDescription}
                onChange={e => setEditedDescription(e.target.value)}
              />
            </StyledForm.Group>
          </StyledForm>
        </Modal.Body>
        <StyledModal.Footer>
          <ModalButton variant="danger" onClick={handleCloseEditModal}>
            Close
          </ModalButton>
          <ModalButton variant="primary" onClick={handleEdit}>
            Save Changes
          </ModalButton>
        </StyledModal.Footer>
      </Modal>
    </TaskItemWrapper>
  );
};

export default TaskItem;
