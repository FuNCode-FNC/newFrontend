import { Children, cloneElement, useEffect, useMemo, useState } from "react";
import { MyButton } from "../componentUI/MyButton.jsx";
import classes from '../../style/componentCss/Carousel.module.css';

export default function Carousel({ children }) {
  const [pages, setPages] = useState([])
  const [offset, setOffset] = useState(0)

  const PAGE_WIDTH = 100
  let flagRigth = false
  let flagLeft = false

  function handleLeftClick() {
    setOffset((currentClick) => {
      let newOffset = currentClick - PAGE_WIDTH
      console.log(newOffset);
      if (newOffset <= 0) {
        newOffset = 0;
        return newOffset
      }
      return newOffset
    })
  }

  const maxPage = PAGE_WIDTH * (pages.length - 1)

  function handleRigthClick() {
    setOffset((currentClick) => {
      const newOffset = currentClick + PAGE_WIDTH
      console.log(newOffset)
      if (newOffset >= maxPage) {
        flagRigth = true
        return maxPage
      }
      flagRigth = false
      return newOffset
    })
  }

  useEffect(() => {
    setPages(
      Children.map(children, (child) => {
        return cloneElement(child, {
          style: {
            heigth: "100%",
            minWidth: `${PAGE_WIDTH}%`,
            maxWidth: `${PAGE_WIDTH}%`,
          },
        })
      })
    )
  }, [])

  useMemo(() => {
    if(maxPage - 1 < offset) {
      flagRigth = true
    }
    if(offset) {
      flagLeft = true
    }
  }, [offset])

  return (
    <div className={classes.container}>
      {flagLeft
        ?
        <MyButton
          className={classes.arrow + " " + classes.arrowLeft}
          onClick={handleLeftClick}
        >
          <svg
            width="45"
            height="46"
            viewBox="0 0 45 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.5 0.105286C34.9062 0.105286 45 10.1991 45 22.6053C45 35.0114 34.9062 45.1053 22.5 45.1053C10.0938 45.1053 0 35.0114 0 22.6053C0 10.1991 10.0938 0.105286 22.5 0.105286ZM22.5 3.56682C11.9648 3.56682 3.46154 12.0701 3.46154 22.6053C3.46154 33.1405 11.9648 41.6437 22.5 41.6437C33.0352 41.6437 41.5385 33.1405 41.5385 22.6053C41.5385 12.0701 33.0352 3.56682 22.5 3.56682ZM23.7462 11.518L33.5856 21.3591L34.8317 22.6053L33.5856 23.8514L23.7427 33.6926L21.2538 31.2591L28.1769 24.3361H10.3846V20.8745H28.1769L21.2538 13.9514L23.7462 11.518Z"
              fill="#E3DEDE"
            />
          </svg>
        </MyButton>
        :
        <div></div>
      }
      <div className={classes.window}>
        <div
          className={classes.allItemsContainer}
          style={{
            transform: `translateX(-${offset}%)`,
          }}
        >
          {pages}
        </div>
      </div>
      {flagRigth
        ? 
        <div></div>
        :
        <MyButton
          className={classes.arrow }
          onClick={handleRigthClick}
        >
          <svg
            width="45"
            height="46"
            viewBox="0 0 45 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.5 0.105286C34.9062 0.105286 45 10.1991 45 22.6053C45 35.0114 34.9062 45.1053 22.5 45.1053C10.0938 45.1053 0 35.0114 0 22.6053C0 10.1991 10.0938 0.105286 22.5 0.105286ZM22.5 3.56682C11.9648 3.56682 3.46154 12.0701 3.46154 22.6053C3.46154 33.1405 11.9648 41.6437 22.5 41.6437C33.0352 41.6437 41.5385 33.1405 41.5385 22.6053C41.5385 12.0701 33.0352 3.56682 22.5 3.56682ZM23.7462 11.518L33.5856 21.3591L34.8317 22.6053L33.5856 23.8514L23.7427 33.6926L21.2538 31.2591L28.1769 24.3361H10.3846V20.8745H28.1769L21.2538 13.9514L23.7462 11.518Z"
              fill="#E3DEDE"
            />
          </svg>
        </MyButton>
      }
    </div>
  );
}