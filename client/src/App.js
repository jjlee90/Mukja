import "./App.scss"
import Home from "./components/home/Home"
import SearchBar from "./components/search/SearchBar"
import Places from "./components/places/Places"
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <SearchBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/places" element={<Places />} />
      </Routes>
    </div>
  )
}

export default App
