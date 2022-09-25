import SerialPlace from '../component/SerialPlace'
import classes from '../style/componentCss/CheckDescription.module.css'

export default function CheckDescription() {
  return (
    <main>
      <form action="" className={classes.form}>
        <div className={classes.greetBlock}>
          <div className={classes.greet}>Add film to</div>
        </div>
        <div className={classes.container}>
          <div className={classes.formBlock}>
            <div className={classes.titleBlock}>
              <h2 className={classes.title}>The name film</h2>
              <div>
                <img src="" alt="gg" />
              </div>
            </div>
            <div className={classes.blockPoster}>
              <div className={classes.posterDetail}>
                <p className={classes.detailName}>director</p>
                <p className={classes.detailDescription}>Film’s director</p>
              </div>
              <div className={classes.posterDetail}>
                <p className={classes.detailName}>genre</p>
                <p className={classes.detailDescription}>Film genre</p>
              </div>
              <div className={classes.posterDetail}>
                <p className={classes.detailName}>categories</p>
                <p className={classes.detailDescription}>Film categories</p>
              </div>
              <div className={classes.posterDetail}>
                <p className={classes.detailName}>year of release</p>
                <p className={classes.detailDescription}>example, 2000</p>
              </div>
              <div className={classes.posterDetail}>
                <p className={classes.detailName}>country</p>
                <p className={classes.detailDescription}>RUSSSSSSIA</p>
              </div>
              <div className={classes.posterDetail}>
                <p className={classes.detailName}>link to the Torrent</p>
                <p className={classes.detailDescription}>Link to the Torrent</p>
              </div>
            </div>
            <div className={classes.posterDescription}>
              <p className={classes.description}>
                description description description 
                description description description 
                description description description 
                description description description 
                description description description 
                description description description 
                description description description 
                description description description 
                description description description 
                description description description
                description description description 
                description description Description
              </p>
            </div>
          </div>
          <div className={classes.formBtn}>
            <input type="submit" value='Submit' className={classes.btn} />
          </div>
        </div>
      </form>
      <SerialPlace />
    </main>
  )
}
