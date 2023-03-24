import { useState } from "react"
import { Link } from "react-router-dom"

const bg = require("../../../statics/assets/img/bg.jpg")
const login = require("../../../statics/assets/img/login.png")
const fb = require("../../../statics/assets/img/fb.png")
const gg = require("../../../statics/assets/img/gg.png")
const SignIn = () => {
  const [valueSignIn, setValueSignIn] = useState({
    email: "",
    password: "",
  })
  const { email, password } = valueSignIn
  const changeValue = (e) => {
    setValueSignIn({ ...valueSignIn, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("ok")
  }

  return (
    <div className="Sign-in" style={{ backgroundImage: `url(${bg})` }}>
      <div className="SignInInner">
        <div className="ImageLogin">
          <img src={login} alt="" />
        </div>
        <div className="d-flex align-items-center justify-content-center mb-3">
          <span className="me-2">Don't have an account?</span>
          <Link to={"/sign-up"}>
            <h3 className="SignUpBtn">Sign up</h3>
          </Link>
        </div>
        <form className="FormLogin" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={changeValue}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              onChange={changeValue}
              name="password"
              value={password}
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
              Remember me
            </label>
          </div>
          <div className="mb-3 d-flex">
            <button type="submit" className="btn btn-primary ButtonSubmit">
              Sign In
            </button>
          </div>
        </form>
        <ul className="SignInPlatform">
          <Link to={"#"}>
            <li className="SignInOption">
              <img src={fb} alt="" />
            </li>
          </Link>
          <Link to={"#"}>
            <li className="SignInOption">
              <img src={gg} alt="" />
            </li>
          </Link>
        </ul>
        <h1>SignIn</h1>
      </div>
    </div>
  )
}

export default SignIn
