import spinner from "../../images/spinner.gif"
import "./loader.scss"

export default function () {
  return (
    <div className="loader">
      <img src={spinner} alt="Loading" />
      <h1>Fetching Data</h1>
    </div>
  )
}
