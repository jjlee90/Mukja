import "./App.scss"
import Home from "./components/home/Home"
import SearchBar from "./components/search/SearchBar"
import Places from "./components/places/Places"
import { Routes, Route } from "react-router-dom"
import { useState } from "react"

function App() {
  const [data, setData] = useState([])
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
