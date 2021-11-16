import { Link } from "react-router-dom"
import Titel from '../../components/titel/titel'
import Button from '../../components/button/button'
import './login.scss'

const Login = () => {
  return (
    <div className="content-log">
      <Titel />
      <div className="text-log">
        <h1>We are what we do</h1>
        <p>Thousand of people are using silent moon<br />
          for meditation and yoga classes.</p>
      </div>
      <div className="but-log">
        <Link to="/sign-up"><Button name={'SIGN UP'} /></Link>
        <Link to="/sign-in">ALREADY HAVE AN ACCOUNT? <span>LOG IN</span></Link>
      </div>
    </div >
  );
}

export default Login;