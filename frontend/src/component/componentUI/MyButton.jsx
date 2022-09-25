import classes from '../../style/componentCss/MyButton.module.css'

export function MyButton({children, ...props}) {
  return (
    <button {...props}>{children}</button>
  )
}

export function LeadMore({children}) {
  return (
    <button className={classes.more}>
      {children}
    </button>
  )
}
