import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedComponent from "./components/ProtecetedComponent";
import { ROUTES } from "./constant/routes";
import AllNews from "./pages/AllNews";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import TopStories from "./pages/TopStories";
import DetailAllNews from "./pages/DetailAllNews";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={ROUTES.LOGIN} element={<Login />} />
        <Route exact path={ROUTES.REGISTER} element={<Register />} />
        <Route exact path={ROUTES.HOME} element={<Layout />}>
          <Route exact index element={<Home />} />
          <Route
            exact
            path={ROUTES.TOP_STORIES}
            element={
              <ProtectedComponent>
                <TopStories />
              </ProtectedComponent>
            }
          />
          <Route exact path={ROUTES.HOME} element={<Home />} />
          <Route
            exact
            path={ROUTES.ALL_NEWS}
            element={
              <ProtectedComponent>
                <AllNews />
              </ProtectedComponent>
            }
          />
          <Route exact
            // path={`${ROUTES.DETAIL_NEWS}/:uuid`}
            path={"/allnews/detail/:uuid"}

            element={
              <ProtectedComponent >
                <DetailAllNews />
              </ProtectedComponent>
            }
          />
        </Route>
        <Route path="*" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
