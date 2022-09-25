import classes from '../../style/componentCss/FilmsDescription.module.css'
import ReactPlayer from 'react-player'

export default function Player({...props}) {
  return (
    <div {...props}>
      <ReactPlayer url='https://www.youtube.com/watch?v=cIwRQwAS_YY'
        playing={true}
        controls='true'
        width='100%'
        height='100%'
      />
    </div>
  )
}
