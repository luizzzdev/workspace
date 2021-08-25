import classes from './flex.module.css';
import classNames from 'classnames';

export function Flex(props) {
  return (
    <div
      className={classNames(classes.flex)}
      style={{
        gap: props.gap || '0',
        alignItems: props.alignItems || 'unset',
      }}
    >
      {props.children}
    </div>
  );
}
