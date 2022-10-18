import { useGoogleLogin, GoogleLogin, googleLogout } from "@react-oauth/google"
import jwt_decode from "jwt-decode"
import { useState, useEffect } from "react"
// const axios = require("axios")

export default function Login() {
  const [user, setUser] = useState({})

  function handleClick(event) {
    event.preventDefault()
    // clear user state when logging out
    setUser({})

    console.log("i was clicked")
  }

  function logout() {
    return (
      <button onClick={handleClick} className="g_id_signout">
        Log Out
      </button>
    )
  }

  return (
    <div>
      {
        // if user.length is not 0 show log out button, else show login button
        Object.keys(user).length != 0 ? (
          // google log out button
          logout()
        ) : (
          // sign in with google button. local host must be running on port 3000.
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              console.log(credentialResponse)

              // decode jwt from google response
              var userObject = jwt_decode(credentialResponse.credential)
              console.log(userObject.name)

              // set user using decoded object
              setUser(userObject)
            }}
            onError={() => {
              console.log("Login Failed")
            }}
          />
        )

        // custom button, NOT WORKING
        //   (
        //     <button onClick={() => googleLogin()}>Sign in with Google 🚀 </button>
        //   )
      }
    </div>
  )
}
// custom login button. DOES NOT WORK
//   const googleLogin = useGoogleLogin({
//     onSuccess: async (tokenResponse) => {
//       console.log(tokenResponse)
//       const userInfo = await fetch(
//         "https://www.googleapis.com/oauth2/v3/userinfo",
//         {
//           "Content-Type": "application/json",
//           headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
//         }
//       )

//       console.log(userInfo.access_token)
//       var userObject = jwt_decode(userInfo.access_token)
//       console.log(userObject)
//     },
//     onError: (errorResponse) => console.log(errorResponse),
//   })
