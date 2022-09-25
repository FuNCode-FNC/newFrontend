import classes from '../style/componentCss/FormRegister.module.css'
import { Link } from 'react-router-dom'

export default function FormAut() {
  return (
    <div className={classes.container}>
      <form action="" className={classes.form}>
        <div className={classes.formAdd}>
          <h3 className={classes.title}>Log in</h3>
          <Link to='/' className={classes.logo}>
            <svg width="185" height="45" viewBox="0 0 185 45" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
              <rect x="0.176453" width="184.412" height="45" fill="url(#pattern0)"/>
              <defs>
              <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
              <use xlinkHref="#image0_264_706" transform="translate(0 -0.0327451) scale(0.001 0.00409804)"/>
              </pattern>
              </defs>
            </svg>
          </Link>
        </div>
        <div className={classes.formBlock}>
          <div className={classes.block}>
            <label htmlFor="name" className={classes.field}>User's name</label>
            <input type="text" name="name" className={classes.input} placeholder='Какой у Вас ник?' />
          </div>
          <div className={classes.block}>
            <label htmlFor="password" className={classes.field}>Password</label>
            <input type="password" name="password" className={classes.input} placeholder='Введите пароль' />
          </div>
        </div>
        <div className={classes.btnBlock}>
          <Link to='/' type="submit" className={classes.btn}>Log in</Link>
        </div>
      </form>
    </div>
  )
}
