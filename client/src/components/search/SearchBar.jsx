import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Login from "../login/Login"
import { AiOutlineSearch } from "react-icons/ai"
import { FaUserCircle } from "react-icons/fa"
import logo from "../../images/logo.png"
import "./searchbar.scss"

export default function SearchBar(props) {
  const navigate = useNavigate()

  // form inputs to create url string for yelp API
  const [formData, setFormData] = useState({
    search: "",
    location: "",
  })

  // listen and handle changes in <form>
  function handleChange(e) {
    e.preventDefault()
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value,
      }
    })
  }

  // POST req, create url string using form data
  async function handleClick(e) {
    e.preventDefault()

    const data = { ...formData }

    let rest = await fetch("http://localhost:3000/api/location", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
    let results = await rest.json()
    console.log(results)
    props.setData(results.businesses)
    props.setDefaultCenter(results.region.center)
    navigate("/places")
  }

  return (
    <div>
      <div className="search-container">
        <img
          src={logo}
          alt="logo"
          className="logo"
          onClick={() => navigate("/")}
        />
        <div>
          <form action="">
            <label htmlFor="search">
              <input
                type="text"
                name="search"
                id="search"
                placeholder="search"
                value={formData.value}
                onChange={handleChange}
              />
            </label>

            <label htmlFor="location">
              <input
                type="text"
                name="location"
                id="location"
                placeholder="location"
                value={formData.value}
                onChange={handleChange}
              />
            </label>

            <button onClick={handleClick}>
              <AiOutlineSearch />
            </button>
          </form>
        </div>
        <div>
          {/* <button>Sign Up</button> */}
          <Login />
        </div>
      </div>
    </div>
  )
}
