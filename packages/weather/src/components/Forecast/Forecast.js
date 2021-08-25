import classes from './forecast.module.css';
import classnames from 'classnames';

import cloudBackground from 'assets/Cloud-background.png';

export function Forecast() {
  return (
    <div className={classnames(classes.container)}>
      <img src={cloudBackground} alt="" />
      <h1>Forecast</h1>


      <div>
        <span>Today</span>
        <span>Fri, 5 Jun</span>
      </div>
    </div>
  );
}
