import CarouselContainer from '../component/CarouselComponent/CarouselContainer'
import classes from '../style/componentCss/Profile.module.css'

export default function Profile() {
  return (
    <main>
      <section className={classes.containerPhoto}>
        <div className={classes.photo}></div>
        <div className={classes.itemProfile}>
          userLogin
        </div>
        <div className={classes.itemProfile}>
          userGmail
        </div>
        <button className={classes.btnProfile}>
          change profile picture
        </button>
      </section>
      <section className={classes.container}>
        <div className={classes.blockItemFilm}>
          <h2 className={classes.title}>To watch</h2>
          <CarouselContainer />
        </div>
        <div className={classes.blockItemFilm}>
          <h2 className={classes.title}>Favourites</h2>
          <CarouselContainer />
        </div>
        <div className={classes.blockItemFilm}>
          <h2 className={classes.title}>Watched</h2>
          <CarouselContainer />
        </div>
      </section>
      <section className={classes.container}>
        <h2 className={classes.title}>Settings</h2>
        <div className={classes.ofsetForm}>
          <p className={classes.discription}>Account details</p>
          <div className={classes.changeForm}>
            <p className={classes.nameField}>
              E-mail
            </p>
            <p className={classes.field}>
              Users e-mail
            </p>
            <button className={classes.btnChange}>
              change e-mail
            </button>
          </div>
          <div className={classes.changeForm}>
            <p className={classes.nameField}>
              Password
            </p>
            <p className={classes.field}>
              Users password
            </p>
            <button className={classes.btnChange}>
              change password
            </button>
          </div>
        </div>
        <p className={classes.discription}>Account managment</p>
        <div className={classes.formOut}>
          <button className={classes.nameField}>
            Sign out
          </button>
        </div>
      </section>
      <section className={classes.containerDeleteAcc}>
        <button className={classes.btnDelete}>Delete account</button>
        <p className={classes.warningAcc}>
          When you delete an account, all data will be deleted,
          including account profiles, browsing history 
          and favorites for each profile
        </p>
      </section>
    </main>
  )
}
