import { BrowserRouter, Route, Routes } from "react-router-dom";
import {ROUTES} from "./constant/routes";
import Login from "./pages/login";
import TopStories from './pages/topStories';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.TOP_STORIES} element={<TopStories />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
