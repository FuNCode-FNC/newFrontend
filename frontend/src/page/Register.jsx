import FormRegister from "../component/FormRegister.jsx"
import HeaderEmail from "../component/HeaderEmail.jsx"
import classes from '../style/componentCss/Register.module.css'

export default function Register() {
  return (
    <div className={classes.container}>
      <FormRegister />
    </div>
  )
}
