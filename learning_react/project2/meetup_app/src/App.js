import { BrowserRouter, Routes, Route } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";

import MainNavigation from "./components/layout/MainNavigation";

function App() {
  return (
    <div>
      {/* Main Navigation:
          - Creates a set of links that send to different paths */}
      <MainNavigation/>
      {/* Routes:
          - Detects what path is being accessed and triggers a component to load */}
      <Routes>
        <Route path="/" element={<AllMeetupsPage/>}/>
        <Route path="/new-meetup" element={<NewMeetupPage/>}/>
        <Route path="/favorites" element={<FavoritesPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
