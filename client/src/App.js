import { Routes, Route } from "react-router-dom"
import { useState } from "react"
import Home from "./components/home/Home"
import SearchBar from "./components/search/SearchBar"
import Places from "./components/places/Places"
import Login from "./components/login/Login"
import Register from "./components/login/Register"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import "./App.scss"

function App() {
  // Place data from yelp fetched from ./components/search
  // pass data and center to ./components/places/Places
  const [data, setData] = useState([])

  // setting center using fetched data
  const [defaultCenter, setDefaultCenter] = useState([])

  return (
    <div className="App">
      <SearchBar setData={setData} setDefaultCenter={setDefaultCenter} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/places"
          element={<Places data={data} defaultCenter={defaultCenter} />}
        />
      </Routes>
      <ToastContainer />
    </div>
  )
}

export default App
