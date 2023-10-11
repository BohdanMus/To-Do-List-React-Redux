import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { createRoot } from 'react-dom';
import { Provider } from 'react-redux';

import { store } from 'redux/store';
import TaskFilter from './TaskFilter/TaskFilter';
import TaskForm from './TaskForm/TaskForm';
import TaskList from './TaskList/TaskList';

const App = () => {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Card>
            <Card.Header as="h2" className="text-center">
              Task Management App
            </Card.Header>
            <Card.Body>
              <TaskForm />
              <TaskFilter />
              <TaskList />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

const root = document.getElementById('root');
const reactRoot = createRoot(root);

reactRoot.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

export default App;
