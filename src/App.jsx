import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AllFilms from "./pages/AllFilms";
import Shorts from "./pages/Shorts";
import TvShows from "./pages/TvShows";
import FilmDetails from "./pages/FilmDetails";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<Dashboard />} path="/">
          <Route element={<AllFilms />} index />
          <Route element={<Shorts />} path="shorts" />
          <Route element={<TvShows />} path="tv-shows" />
          <Route element={<FilmDetails />} path="films/:id" />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
