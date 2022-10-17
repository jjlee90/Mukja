export default function SignUp() {
  return (
    <div className="container">
      <h1>Create your Account</h1>
      <div>
        <label htmlFor="fname">
          FIRST NAME
          <input placeholder="enter your email" type="text" />
        </label>
      </div>
      <div>
        <label htmlFor="lname">
          LAST NAME
          <input placeholder="enter your email" type="text" />
        </label>
      </div>
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
      <div>
        <label htmlFor="password">
          CONFIRM PASSWORD
          <input placeholder="re-enter your password" type="password" />
        </label>
      </div>
      <button>Sign Up</button>
      <button>Sign Up With Google</button>
    </div>
  )
}
