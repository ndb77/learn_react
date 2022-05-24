import { BrowserRouter, Routes, Route } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";

import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      {/* Main Navigation:
          - Creates a set of links that send to different paths */}
      {/* Routes:
          - Detects what path is being accessed and triggers a component to load */}
      <Routes>
        <Route path="/" element={<AllMeetupsPage />} />
        <Route path="/new-meetup" element={<NewMeetupPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
