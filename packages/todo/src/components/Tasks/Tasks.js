import classes from './tasks.module.css';
import classNames from 'classnames';
import { Textarea } from '../UI/Textarea/Textarea';
import { Flex } from '../UI/Flex/Flex';
import { Button } from '../UI/Button/Button';
import { useState } from 'react';
import { Task } from '../Task/Task';

export function Tasks() {
  const [isAddingTask, setIsAddingTask] = useState(false);
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleInputNewTask = (event) => {
    setNewTask(event.target.value);
  };

  const onConfirmNewTask = () => {
    setTasks((prevState) =>
      prevState.concat({
        id: Date.now(),
        description: newTask,
        isCompleted: false,
      })
    );
  };

  const startAddNewTask = () => {
    setIsAddingTask(true);
  };

  const cancelAddNewTask = () => {
    setIsAddingTask(false);
    setNewTask('');
  };

  const handleCompleteTask = (taskId, isCompleted) => {
    setTasks((tasks) => {
      return tasks.map((task) => {
        if (task.id === taskId) {
          return {
            ...task,
            isCompleted,
          };
        }
        return task;
      });
    });
  };

  return (
    <div className={classNames(classes.container)}>
      {isAddingTask ? (
        <>
          <Textarea
            onChange={handleInputNewTask}
            value={newTask}
            rows={5}
            cols={50}
            placeholder={'ex: buscar ração para o cachorro'}
          />

          <Flex gap={'12px'}>
            <Button
              type={'primary'}
              onClick={onConfirmNewTask}
              disabled={newTask.length < 4}
            >
              Add task
            </Button>
            <Button onClick={cancelAddNewTask}>Cancel</Button>
          </Flex>
        </>
      ) : (
        <div>
          <Button type={'primary'} onClick={startAddNewTask}>
            Add task
          </Button>
        </div>
      )}

      <hr />

      {tasks.map((task) => (
        <Task task={task} onCompleteTask={handleCompleteTask} />
      ))}
    </div>
  );
}
