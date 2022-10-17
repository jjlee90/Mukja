import "./App.scss"
import Home from "./components/home/Home"
import SearchBar from "./components/search/SearchBar"
import Places from "./components/places/Places"
import Login from "./components/login/Login"
import SignUp from "./components/signUp/signUp"
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <SearchBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/places" element={<Places />} />
        <Route path="/account/login" element={<Login />} />
        <Route path="/account/signup" element={<SignUp />} />
      </Routes>
    </div>
  )
}

export default App
