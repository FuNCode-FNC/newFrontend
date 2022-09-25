import classes from '../style/style.module.css'
import { Title } from './componentUI/MyTitle.jsx'
import List from './componentUI/List.jsx'

export default function NewBlock() {
  return (
    <section className={classes.novelties}>
      <Title>New</Title>
      <List />
    </section>
  )
}
