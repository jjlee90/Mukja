import homeImg from "../../images/home.jpg"
import "./home.scss"

export default function Home() {
  return (
    <div className="home">
      <img src={homeImg} alt="home-img" />
    </div>
  )
}
