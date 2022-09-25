import classes from '../style/componentCss/FilmsPost.module.css'
import { Routes, Route, Link } from 'react-router-dom'

export default function FilmsPost(post) {
  return (
    <Link to='/FilmsDescription'>
      <div className={classes.cardItem} key={post.post.id}>
        <div>
          <img src={post.post.url} className={classes.img} alt="films icon" />
          <div>
            <h3>{post.post.id} {post.post.title}</h3>
            <p>{post.post.url}</p>
          </div>
        </div>
        <div>
          {post.post.title}
        </div>
      </div>
    </Link>
  )
}
