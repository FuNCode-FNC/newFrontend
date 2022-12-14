import classes from '../style/componentCss/EmailSent.module.css'

export default function EmailSent() {
  return (
    <div className={classes.container}>
      <div>
        <div className={classes.email}>
          <svg width="100" height="64" viewBox="0 0 100 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 10.5636C0 7.76193 1.31696 5.07505 3.66117 3.09399C6.00537 1.11294 9.18479 0 12.5 0H87.5C90.8152 0 93.9946 1.11294 96.3388 3.09399C98.683 5.07505 100 7.76193 100 10.5636V52.8178C100 55.6194 98.683 58.3063 96.3388 60.2874C93.9946 62.2684 90.8152 63.3814 87.5 63.3814H12.5C9.18479 63.3814 6.00537 62.2684 3.66117 60.2874C1.31696 58.3063 0 55.6194 0 52.8178V10.5636ZM12.5 5.28178C10.8424 5.28178 9.25268 5.83825 8.08058 6.82878C6.90848 7.8193 6.25 9.16274 6.25 10.5636V11.7097L50 33.8932L93.75 11.7097V10.5636C93.75 9.16274 93.0915 7.8193 91.9194 6.82878C90.7473 5.83825 89.1576 5.28178 87.5 5.28178H12.5ZM93.75 17.8683L64.325 32.7893L93.75 48.0906V17.8683ZM93.5375 54.1858L58.2875 35.8527L50 40.0517L41.7125 35.8527L6.4625 54.1805C6.81766 55.3044 7.60198 56.2979 8.69369 57.0065C9.78539 57.7152 11.1234 58.0994 12.5 58.0996H87.5C88.8758 58.0997 90.2132 57.7162 91.3048 57.0086C92.3964 56.301 93.1812 55.3087 93.5375 54.1858V54.1858ZM6.25 48.0906L35.675 32.7893L6.25 17.8683V48.0906Z" fill="#E3DEDE"/>
          </svg>
        </div>
        <div className={classes.emailTitle}>
          <div className={classes.title}>
            <p className={classes.titleText}>
              The email is
            </p>
            <a href='mailto:https://mail.ru/' className={classes.toEmail}>
              sent
            </a>
          </div>
        </div>
        <div className={classes.emailDiscription}>
          <p className={classes.textDiscription}>
            Please check your inbox and confirm your email address to finish setting up your account.
          </p>
        </div>
      </div>
    </div>
  )
}
