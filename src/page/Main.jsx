import classes from '../style/style.module.css'
import CarouselContainer from "../component/CarouselComponent/CarouselContainer"
import NewBlockNavigation from "../component/NewBlock"
import NewBlockAlbum from "../component/NewBlockAlbum"
import {MainTitle} from '../component/componentUI/MyTitle'

export default function Main() {
  return (
    <main className={classes.container}>
      <MainTitle>Popular</MainTitle>
      <CarouselContainer />
      <NewBlockNavigation />
      <NewBlockAlbum className={classes.pad}/>
      <hr/>
    </main>
  )
}