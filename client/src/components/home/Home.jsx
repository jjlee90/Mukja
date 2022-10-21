import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import homeImg from "../../images/home.jpg"
import "./home.scss"

export default function Home() {
  const navigate = useNavigate()

  const { user } = useSelector((state) => state.auth)

  // useEffect(() => {
  //   if (!user) {
  //     navigate("/login")
  //   }

  // }, [user, navigate])

  return (
    <div className="home">
      <img src={homeImg} alt="home-img" />
    </div>
  )
}
