import "./App.scss"
import Home from "./components/home/Home"
import SearchBar from "./components/search/SearchBar"
import Places from "./components/places/Places"
import { Routes, Route } from "react-router-dom"
import { useState } from "react"

function App() {
  const [data, setData] = useState([])
  console.log(setData)
  console.log(data)

  return (
    <div className="App">
      <SearchBar setData={setData} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/places" element={<Places data={data} />} />
      </Routes>
    </div>
  )
}

export default App
