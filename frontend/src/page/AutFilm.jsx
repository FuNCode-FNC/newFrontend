import classes from '../style/componentCss/AutFilm.module.css'

export default function AutFilm() {
  return (
    <main className={classes.container}>
      <h3 className={classes.title}>Add film to 
        <svg width="185" height="45" viewBox="0 0 185 45" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          <rect width="184.412" height="45" fill="url(#pattern0)"/>
          <defs>
          <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0_264_1533" transform="translate(0 -0.0327451) scale(0.001 0.00409804)"/>
          </pattern>
          </defs>
        </svg>
      </h3>
      <form action="" className={classes.form}>
        <div className={classes.formContainer}>
          <div className={classes.formBlock}>
            <label htmlFor="title" className={classes.label}>The title</label>
            <input type="text" name="title" placeholder="Название фильма" className={classes.input} />
            <label htmlFor="discription" className={classes.label}>Discription</label>
            <textarea type="message" name="discription" placeholder="Описание" className={classes.textarea} />
          </div>
          <div className={classes.formBlock}>
            <label htmlFor="linkCover" className={classes.label}>Link to the cover</label>
            <input type="text" name="linkCover" placeholder="Ссылка" className={classes.input}/>
            <label htmlFor="torrent" className={classes.label}>Link to the torrent</label>
            <input type="text" name="torrent" placeholder="Ссылка" className={classes.input} />
          </div>
        </div>
        <div className={classes.btnBlock}>
          <input type="submit" className={classes.btn} value='sign up'/>
        </div>
      </form>
    </main>
  )
}
