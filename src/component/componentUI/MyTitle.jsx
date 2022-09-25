import classes from '../../style/componentCss/MyTitle.module.css'

export function MainTitle({children, ...props}) {
  return (
    <h1 className={classes.mainTitle} {...props}>{children}</h1>
  )
}

export function Title({children, ...props}) {
  return (
    <h2 className={classes.title} {...props}>{children}</h2>
  )
}
