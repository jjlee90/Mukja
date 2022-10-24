import { useState, useEffect } from "react"
import { FaSignInAlt } from "react-icons/fa"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
// register and reset function
import { login, reset } from "../../features/auth/authSlice"
import Loading from "../loader/Loading"
import "./login.scss"

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const { email, password } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  // destructure what we want from state
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess || user) {
      navigate("/")
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  if (isLoading) {
    return <Loading />
  }

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const userData = {
      email,
      password,
    }

    dispatch(login(userData))
  }
  return (
    <div className="loginContainer">
      <section>
        <h1>
          <FaSignInAlt /> Log In
        </h1>
        <p>Log in and get started!</p>
      </section>

      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={onChange}
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={password}
              placeholder="Enter password"
              onChange={onChange}
            />
          </div>

          <div>
            <button type="submit" className="btn btn-block">
              Submit
            </button>
          </div>
        </form>
      </section>
    </div>
  )
}

// export default function Login() {
//   const [user, setUser] = useState({})

//   function handleClick(event) {
//     event.preventDefault()
//     // clear user state when logging out
//     setUser({})

//     console.log("i was clicked")
//   }

//   function logout() {
//     return (
//       <button onClick={handleClick} className="g_id_signout">
//         Log Out
//       </button>
//     )
//   }
//   console.log(user)
//   return (
//     <div>
//       {
//         // if user.length is not 0 show log out button, else show login button
//         Object.keys(user).length != 0 ? (
//           // google log out button
//           logout()
//         ) : (
//           // sign in with google button. local host must be running on port 3000.
//           <GoogleLogin
//             onSuccess={(credentialResponse) => {
//               console.log(credentialResponse)

//               // decode jwt from google response
//               var userObject = jwt_decode(credentialResponse.credential)
//               console.log(userObject.name)

//               // set user using decoded object
//               setUser(userObject)
//             }}
//             onError={() => {
//               console.log("Login Failed")
//             }}
//           />
//         )
//       }
//     </div>
//   )
// }
