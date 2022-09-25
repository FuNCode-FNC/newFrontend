import classes from '../style/componentCss/AddFilm.module.css'

export default function AddFilm() {
  return (
    <main className={classes.container}>
      <h2 className={classes.title}>Add film 
        <svg width="185" height="45" viewBox="0 0 185 45" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <rect width="184.412" height="45" fill="url(#pattern0)"/>
            <defs>
            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlinkHref="#image0_264_1533" transform="translate(0 -0.0327451) scale(0.001 0.00409804)"/>
            </pattern>
            </defs>
          </svg>
      </h2>
      <form action="" className={classes.form}>
        <div className={classes.formBlock}>
          <div className={classes.formItem}>
            <div className={classes.blockField}>
              <label htmlFor='title' className={classes.label}>The title</label>
              <input type="text" name='title' placeholder="Films title" className={classes.input} />
            </div>
            <div className={classes.blockField}>
              <label htmlFor='genre' className={classes.label}>The genres</label>
              <input type="text" name='genre' placeholder="Film’s genres" className={classes.input} />
            </div>
            <div className={classes.blockField}>
              <label htmlFor='director' className={classes.label}>Directors</label>
              <input type="text" name='director' placeholder="Film’s directors" className={classes.input} />
            </div>
            <div className={classes.blockField}>
              <label htmlFor='category' className={classes.label}>The category</label>
              <input type="text" name='category' placeholder="Film’s category" className={classes.input} />
            </div>
          </div>
          <div className={classes.formItem}>
            <div className={classes.blockField}>
              <label htmlFor='country' className={classes.label}>Country</label>
              <input type="text" name='country' placeholder="Where film was shot" className={classes.input} />
            </div>
            <div className={classes.blockField}>
              <label htmlFor='year' className={classes.label}>Year</label>
              <input type="text" name='year' placeholder="Film’s year of release" className={classes.input} />
            </div>
            <div className={classes.blockField}>
              <label htmlFor='linkCover' className={classes.label}>Link to the cover</label>
              <input type="text" name='linkCover' placeholder="Link to the film’s cover" className={classes.input} />
            </div>
            <div className={classes.blockField}>
              <label htmlFor='linkTorrent' className={classes.label}>Link to the Torrent</label>
              <input type="text" name='linkTorrent' placeholder="Link to the Torrent" className={classes.input} />
            </div>
          </div>
        </div>
        <div className={classes.formBlock}>
          <div className={classes.teaxtareaBlock}>
            {/* <label htmlFor="description" className={classes.description}>Description</label> */}
            <textarea name="description" className={classes.textarea} placeholder='Description' />
          </div>
          <div className={classes.btnBlock}>
            <input type="submit" name="submit" value='submit' className={classes.btn} />
          </div>
        </div>
      </form>
    </main>
  )
}
