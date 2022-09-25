import classes from '../style/componentCss/NewBlockAlbum.module.css'
import axios from 'axios'
import FilmsPost from './FilmsPost.jsx'
import { useEffect, useMemo, useState } from 'react'
import getPageCount from '../utils/GetPageCount.js'
import { MyButton } from './componentUI/MyButton'
import { Routes, Route, Link } from 'react-router-dom'
// import FilmsDescription from './page/FilmsDescription.jsx'

export default function NewBlockAlbum() {

  const [posts, setPosts] = useState([])
  const [totalCount, setTotalCount] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  const btnItem = []
  const PAGINATION_BTN_LENGTH = 5

  async function fetchPost() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/photos', {
      params: {
        _limit: limit,
        _page: page,
      }
    })
    setPosts(response.data)
    const totalBtn = response.headers['x-total-count']
    setTotalCount(getPageCount(totalBtn, limit))
  }

  useEffect(() => {
    fetchPost()
  }, [page])

  useMemo(() => {
    for(let i = 0; i < totalCount; i++) {
      btnItem.push(i + 1)
    }
  }, [btnItem])

  const changePage = (page) => {
    setPage(page)
    console.log(page)
  }

  return (
    <section className={classes.sectionAlbum}>
      <div className={classes.cardList}>
        {posts.map(post =>
          <div>
            <FilmsPost post={post} key={post.id}/>
          </div>
        )}
      </div>
      <div className={classes.btnWrapper}>
        {
          btnItem.length > PAGINATION_BTN_LENGTH
          ?
          btnItem.filter(btn => btn < PAGINATION_BTN_LENGTH).map(btn => <MyButton onClick={() => changePage(btn)} className={classes.btnPage}>{btn}</MyButton>)
          :
          btnItem.map(btn => <MyButton className={classes.btnPage}>{btn}</MyButton>)
        }
        {
          btnItem.length > PAGINATION_BTN_LENGTH
          ?
          <span className={classes.kk}>...</span>
          :
          <div></div>
        }
        {
          btnItem.length > PAGINATION_BTN_LENGTH
          ?
          <MyButton className={classes.btnPage}> {btnItem.length - 1}</MyButton>
          :
          <div></div>
        }
      </div>
    </section>
  )
}
