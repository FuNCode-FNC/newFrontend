import classes from '../../style/componentCss/IconButton.module.css'

export default function Tooltip({children}) {
  return (
    <span className={classes.tooltip}>
      {children}
    </span>
  )
}
