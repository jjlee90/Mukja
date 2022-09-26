import "./App.scss"
import Home from "./components/home/Home"

import SearchBar from "./components/search/SearchBar"

function App() {
  return (
    <div className="App">
      <SearchBar />

      <Home />
    </div>
  )
}

export default App
