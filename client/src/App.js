import "./App.scss"
import Home from "./components/home/Home"
import SearchBar from "./components/search/SearchBar"
import Places from "./components/places/Places"
import { Routes, Route } from "react-router-dom"
import { useState } from "react"

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
        <Route
          path="/places"
          element={<Places data={data} defaultCenter={defaultCenter} />}
        />
      </Routes>
    </div>
  )
}

export default App
