import classes from './textarea.module.css';
import classNames from 'classnames';

export function Textarea(props) {
  return <textarea {...props} className={classNames(classes.textarea)} />;
}
