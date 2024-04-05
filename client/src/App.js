import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./components/home/Home";
import SearchBar from "./components/search/SearchBar";
import Places from "./components/places/Places";
import Login from "./components/login/Login";
import Register from "./components/login/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Grid } from "@mui/material";
// import "./App.scss";

function App() {
  // Place data from yelp fetched from ./components/search
  // pass data and center to ./components/places/Places
  const [data, setData] = useState([]);
  const [totalPlaces, setTotalPlaces] = useState(0);

  // setting center using fetched data
  const [defaultCenter, setDefaultCenter] = useState([]);

  return (
    <Grid
      container
      sx={{
        backgroundColor: "#00ACD5",
      }}
    >
      <SearchBar
        setTotalPlaces={setTotalPlaces}
        setData={setData}
        setDefaultCenter={setDefaultCenter}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> */}
        <Route
          path="/places"
          element={
            <Places
              totalPlaces={totalPlaces}
              data={data}
              defaultCenter={defaultCenter}
              setTotalPlaces={setTotalPlaces}
              setData={setData}
              setDefaultCenter={setDefaultCenter}
            />
          }
        />
      </Routes>
      <ToastContainer />
    </Grid>
  );
}

export default App;
