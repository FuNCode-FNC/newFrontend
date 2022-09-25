import classes from "../style/componentCss/SerialPlace.module.css";

export default function SerialPlace() {
  return (
    <div className={classes.containerSerial}>
      <div className={classes.blockSerial}>
        <p className={classes.title}>Season</p>
        <ul className={classes.list}>
          <li className={classes.elem}>
            <button className={classes.btn}>
              1
            </button>
          </li>
          <li className={classes.elem}>
            <button className={classes.btn}>
              2
            </button>
          </li>
          <li className={classes.elem}>
            <button className={classes.btn}>
              3
            </button>
          </li>
          <li className={classes.elem}>
            <button className={classes.btn}>
              4
            </button>
          </li>
          <li className={classes.elem}>
            <button className={classes.btn}>
              5
            </button>
          </li>
        </ul>
        <div className={classes.addElem}>
          <button className={classes.addBtn}>
            <svg className={classes.svg} width="36" height="36" viewBox="0 0 36 36" fill="926EAE" xmlns="http://www.w3.org/2000/svg">
              <path d="M25.3928 16.7142H19.2856V10.6071C19.2856 10.4303 19.141 10.2856 18.9642 10.2856H17.0356C16.8589 10.2856 16.7142 10.4303 16.7142 10.6071V16.7142H10.6071C10.4303 16.7142 10.2856 16.8589 10.2856 17.0356V18.9642C10.2856 19.141 10.4303 19.2856 10.6071 19.2856H16.7142V25.3928C16.7142 25.5696 16.8589 25.7142 17.0356 25.7142H18.9642C19.141 25.7142 19.2856 25.5696 19.2856 25.3928V19.2856H25.3928C25.5696 19.2856 25.7142 19.141 25.7142 18.9642V17.0356C25.7142 16.8589 25.5696 16.7142 25.3928 16.7142Z" fill="#926EAE"/>
              <path d="M18 0C8.05982 0 0 8.05982 0 18C0 27.9402 8.05982 36 18 36C27.9402 36 36 27.9402 36 18C36 8.05982 27.9402 0 18 0ZM18 32.9464C9.74732 32.9464 3.05357 26.2527 3.05357 18C3.05357 9.74732 9.74732 3.05357 18 3.05357C26.2527 3.05357 32.9464 9.74732 32.9464 18C32.9464 26.2527 26.2527 32.9464 18 32.9464Z" fill="#926EAE"/>
            </svg>
            add a season
          </button>
        </div>
      </div>
      <div className={classes.blockSerial}>
        <p className={classes.title}>Series</p>
        <ul className={classes.list}>
          <li className={classes.elem}>
            <button className={classes.btn}>
              1
            </button>
          </li>
          <li className={classes.elem}>
            <button className={classes.btn}>
              2
            </button>
          </li>
          <li className={classes.elem}>
            <button className={classes.btn}>
              3
            </button>
          </li>
          <li className={classes.elem}>
            <button className={classes.btn}>
              4
            </button>
          </li>
          <li className={classes.elem}>
            <button className={classes.btn}>
              5
            </button>
          </li>
        </ul>
        <div className={classes.addElem}>
          <button className={classes.addBtn}>
            <svg className={classes.svg} width="36" height="36" viewBox="0 0 36 36" fill="926EAE" xmlns="http://www.w3.org/2000/svg">
              <path d="M25.3928 16.7142H19.2856V10.6071C19.2856 10.4303 19.141 10.2856 18.9642 10.2856H17.0356C16.8589 10.2856 16.7142 10.4303 16.7142 10.6071V16.7142H10.6071C10.4303 16.7142 10.2856 16.8589 10.2856 17.0356V18.9642C10.2856 19.141 10.4303 19.2856 10.6071 19.2856H16.7142V25.3928C16.7142 25.5696 16.8589 25.7142 17.0356 25.7142H18.9642C19.141 25.7142 19.2856 25.5696 19.2856 25.3928V19.2856H25.3928C25.5696 19.2856 25.7142 19.141 25.7142 18.9642V17.0356C25.7142 16.8589 25.5696 16.7142 25.3928 16.7142Z" fill="#926EAE"/>
              <path d="M18 0C8.05982 0 0 8.05982 0 18C0 27.9402 8.05982 36 18 36C27.9402 36 36 27.9402 36 18C36 8.05982 27.9402 0 18 0ZM18 32.9464C9.74732 32.9464 3.05357 26.2527 3.05357 18C3.05357 9.74732 9.74732 3.05357 18 3.05357C26.2527 3.05357 32.9464 9.74732 32.9464 18C32.9464 26.2527 26.2527 32.9464 18 32.9464Z" fill="#926EAE"/>
            </svg>
            add a series
          </button>
        </div>
      </div>
    </div>
  );
}
