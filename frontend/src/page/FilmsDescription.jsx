import classes from "../style/componentCss/FilmsDescription.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Title } from "../component/componentUI/MyTitle.jsx";
import CarouselContainer from "../component/CarouselComponent/CarouselContainer.jsx";
import { Comm, NewComm } from "../component/Comm.jsx";
import { LeadMore } from "../component/componentUI/MyButton";
import Player from "../component/player/Player";
import { ReportBtn,  ShareBtn, WatchBtn } from "../component/componentUI/IconButton";

export default function FilmsDescription() {
  const [posts, setPosts] = useState([]);
  const [comm, setComm] = useState([]);
  const RATING_FILMS = [];
  RATING_FILMS.length = 10;

  async function asyncPostItem() {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/photos"
    );
    setPosts(response.data);
    console.log(response.data);
    return response.data;
  }

  async function asyncCommItem() {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/comments"
    );
    setComm(response.data);
    console.log(response.data);
    return response.data;
  }

  useEffect(() => {
    asyncPostItem();
    asyncCommItem();
    // console.log(posts)
    console.log(RATING_FILMS);
  }, []);

  return (
    <main>
      <div className={classes.container}>
        <h2 className={classes.title}>Yes mabs</h2>
        <div className={classes.descriptionPoster}>
          <div className={classes.blockPoster}>
            <img alt="films name" className={classes.poster} />
          </div>
          <div className={classes.blockPoster}>
            <div className={classes.posterDetail}>
              <p className={classes.detailName}>Genre</p>
              <p className={classes.detailDescription}>Comedy</p>
            </div>
            <div className={classes.posterDetail}>
              <p className={classes.detailName}>duration</p>
              <p className={classes.detailDescription}>time</p>
            </div>
            <div className={classes.posterDetail}>
              <p className={classes.detailName}>director</p>
              <p className={classes.detailDescription}>name</p>
            </div>
            <div className={classes.posterDetail}>
              <p className={classes.detailName}>release</p>
              <p className={classes.detailDescription}>data</p>
            </div>
            <div className={classes.posterDetail}>
              <p className={classes.detailName}>country</p>
              <p className={classes.detailDescription}>RUSSSSSSIA</p>
            </div>
          </div>
          <div className={classes.blockPoster}>
            <div className={classes.descriptionText}>
              Carl Allen is at a standstill. No future - until the day he
              enrolls into a personal development program based on a very simple
              idea: say yes to everything. Carl discovers with amazement the
              magical power of "Yes", and sees his professional and romantic
              life turned upside down overnight: an unexpected promotion and a
              new girlfriend. But he'll soon discover that better can be good's
              enemy, and that not all opportunities should be taken.
            </div>
          </div>
        </div>
        {/* <button onClick={asyncPostItem}>Грузим</button> */}
        <div className={classes.playerBlock}>
          <div>
            <Player className={classes.player} />
          </div>
          <div className={classes.blockBtn}>
            <ReportBtn className={classes.btn} />
            <ShareBtn className={classes.btn} />
            <WatchBtn className={classes.btn} />
          </div>
        </div>
      </div>
      <div>
        <div>
          <Title className={classes.likeTitle}>You may like</Title>
          <div className={classes.containerCarousel}>
            <CarouselContainer />
          </div>
        </div>
        <div>
          <h3 className={classes.revName}>Community reviews</h3>
          <div className={classes.containerComm}>
            <div className={classes.blockNewComm}>
              <NewComm />
            </div>
            <div className={classes.blockNewComm}>
              <Comm />
              <LeadMore>Load more</LeadMore>
            </div>
            {/* <div className={classes.moreMore}>Load more</div> */}
          </div>
        </div>
      </div>
    </main>
  );
}
