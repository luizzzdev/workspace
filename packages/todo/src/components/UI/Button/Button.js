import classes from './button.module.css';
import classNames from 'classnames';

export function Button(props) {
  const buttonClasses = classNames(classes.button, {
    [classes.buttonPrimary]: props.type === 'primary',
  });

  return <button {...props} className={buttonClasses}></button>;
}
