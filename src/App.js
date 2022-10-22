import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTES } from "./constant/routes";
import AllNews from "./pages/AllNews";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import TopStories from './pages/TopStories';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route path={ROUTES.REGISTER} element={<Register />} />
          <Route path={ROUTES.TOP_STORIES} element={<TopStories />} />
          <Route path={ROUTES.ALL_NEWS} element={<AllNews />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
