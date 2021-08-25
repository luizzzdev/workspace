import classes from './checkbox.module.css';
import classNames from 'classnames';

export function Checkbox(props) {
  return <input type="checkbox" {...props} className={classNames(classes.checkbox)} />;
}
