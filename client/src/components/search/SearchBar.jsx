import { AiOutlineSearch } from "react-icons/ai"
import { FaUserCircle } from "react-icons/fa"
import logo from "../../images/logo.png"
import "./searchbar.scss"

export default function SearchBar() {
  return (
    <div>
      <div className="search-container">
        <img src={logo} alt="logo" className="logo" />
        <div>
          <form action="">
            <label htmlFor="search">
              <input type="text" name="search" id="search" />
            </label>

            <label htmlFor="location">
              <input type="text" name="location" id="location" />
            </label>

            <button>
              <AiOutlineSearch />
            </button>
          </form>
        </div>
        <div>
          <button>Sign Up</button>
          <button>Login</button>
        </div>
      </div>
    </div>
  )
}
