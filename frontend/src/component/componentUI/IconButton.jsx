import classes from '../../style/componentCss/IconButton.module.css'
import Tooltip from './Tooltip'

export function ReportBtn({...props}) {
  return (
    <div className={classes.blockBtn}>
      <div className={classes.btn} {...props}>
        <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.4775 45C10.053 44.9865 -0.00899397 34.9088 6.03286e-06 22.4843C0.00900603 10.062 10.0845 -0.00449849 22.5068 1.50813e-06C34.9313 0.00450151 45 10.0755 45 22.5C44.9933 34.9313 34.9088 45.0045 22.4775 45ZM4.50001 22.887C4.55114 27.6439 6.48326 32.1871 9.87408 35.5236C13.2649 38.8602 17.8386 40.7188 22.5957 40.6932C27.3528 40.6677 31.9063 38.76 35.261 35.3872C38.6158 32.0143 40.499 27.4506 40.499 22.6935C40.499 17.9364 38.6158 13.3727 35.261 9.99983C31.9063 6.627 27.3528 4.71933 22.5957 4.69376C17.8386 4.66819 13.2649 6.5268 9.87408 9.86337C6.48326 13.1999 4.55114 17.7431 4.50001 22.5V22.887ZM24.75 33.75H20.25V29.25H24.75V33.75ZM24.75 24.75H20.25V11.25H24.75V24.75Z" fill="#E3DEDE"/>
        </svg>
        {/* <Tooltip>report a problem</Tooltip> */}
        <span className={classes.tooltip}>
          report a problem
        </span>
      </div>
    </div>
  )
}

export function ShareBtn({...props}) {
  return (
    <div className={classes.blockBtn}>
      <div className={classes.btn} {...props}>
        <svg width="46" height="45" viewBox="0 0 46 45" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M35.6958 21.6963L28.4609 28.9262V26.357C28.4609 25.8048 28.0132 25.357 27.4609 25.357C20.8839 25.357 16.8423 27.201 14.5469 29.2527C15.3914 26.0315 17.1046 23.5358 19.0912 21.7093C21.9583 19.0734 25.3443 17.8749 27.4609 17.8749C28.0132 17.8749 28.4609 17.4272 28.4609 16.8749V14.4665L35.6958 21.6963Z" fill="#E3DEDE" stroke="#E3DEDE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M44.0811 22.5C44.0811 33.8896 34.8412 43.125 23.4404 43.125C12.0397 43.125 2.7998 33.8896 2.7998 22.5C2.7998 11.1104 12.0397 1.875 23.4404 1.875C34.8412 1.875 44.0811 11.1104 44.0811 22.5Z" stroke="#E3DEDE" stroke-width="3.75" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span className={classes.tooltip}>
          share link
        </span>
      </div>
    </div>
  )
}

export function WatchBtn({...props}) {
  return (
    <div className={classes.blockBtn}>
      <div className={classes.btn} {...props}>
        <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.5 0C10.125 0 0 10.125 0 22.5C0 34.875 10.125 45 22.5 45C34.875 45 45 34.875 45 22.5C45 10.125 34.875 0 22.5 0ZM22.5 40.5C12.5775 40.5 4.5 32.4225 4.5 22.5C4.5 12.5775 12.5775 4.5 22.5 4.5C32.4225 4.5 40.5 12.5775 40.5 22.5C40.5 32.4225 32.4225 40.5 22.5 40.5ZM23.625 11.25H20.25V24.75L31.95 31.95L33.75 29.025L23.625 22.95V11.25Z" fill="#E3DEDE"/>
        </svg>
        <Tooltip>add to to-watch</Tooltip>
      </div>
    </div>
  )
}
