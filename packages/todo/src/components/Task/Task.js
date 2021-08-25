import classNames from 'classnames';
import { Checkbox } from '../UI/Checkbox/Checkbox';
import { Flex } from '../UI/Flex/Flex';

export function Task(props) {
  const task = props.task;

  const onCompleteTask = (event) => {
    props.onCompleteTask(task.id, event.target.checked);
  };

  return (
    <Flex gap={6} alignItems={'center'}>
      <Checkbox onChange={onCompleteTask} />
      <span
        className={classNames({
          'line-through': task.isCompleted,
        })}
      >
        {task.description}
      </span>
    </Flex>
  );
}
