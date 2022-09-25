import { Link } from 'react-router-dom'
import classes from '../../style/componentCss/List.module.css'

export default function List() {
  return (
    <ul className={classes.list}>
      <li className={classes.elem}>
        <Link to='/Profile'>
          New releases
        </Link>
      </li>
      <li className={classes.elem}>
        <button>
          Films
        </button>
      </li>
      <li className={classes.elem}>
        <button>
          Series
        </button>
      </li>
      <li className={classes.elem}>
        <button>
          Carttons
        </button>
      </li>
    </ul>
  )
}
