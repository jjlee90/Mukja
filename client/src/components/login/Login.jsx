import { GoogleLogin } from "@react-oauth/google"
import jwt_decode from "jwt-decode"

export default function Login() {
  return (
    <div className="container">
      {/* <h1>Welcome Back</h1>
      <div>
        <label htmlFor="email">
          EMAIL
          <input placeholder="enter your email" type="email" />
        </label>
      </div>
      <div>
        <label htmlFor="password">
          PASSWORD
          <input placeholder="enter your password" type="password" />
        </label>
      </div>
      <button>LOGIN</button> */}
      <div>
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse.credential)
            var decoded = jwt_decode(credentialResponse.credential)
            console.log(decoded)
          }}
          onError={() => {
            console.log("Login Failed")
          }}
        />
      </div>
      {/* <p>or</p>
      <button>Sign Up</button> */}
    </div>
  )
}
