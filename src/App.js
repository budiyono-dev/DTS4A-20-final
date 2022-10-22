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
// import Main from "./Main";
import { ProtectedRoute } from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path={ROUTES.HOME} element={<Layout />}> */}
        {/* <Route index element={<Home />} /> */}
        <Route path={ROUTES.LOGIN} element={ <ProtectedComponent path={ROUTES.LOGIN}><Login /></ProtectedComponent>} />
        <Route path={ROUTES.REGISTER} element={<Register />} />
        <Route path={ROUTES.HOME} element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path={ROUTES.TOP_STORIES}
            element={
              <ProtectedComponent path={ROUTES.TOP_STORIES}>
                <TopStories />
              </ProtectedComponent>
            }
          />
          <Route path={ROUTES.HOME} element={<Home />} exact />
          <Route
            path={ROUTES.ALL_NEWS}
            element={
              <ProtectedComponent path={ROUTES.ALL_NEWS}>
                <AllNews />
              </ProtectedComponent>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* <ProtectedRoute component={Main} /> */}

        {/* <ProtectedComponent com>

        </ProtectedComponent> */}
        {/* <Route path={ROUTES.HOME} element={<Main />} /> */}

        {/* <Route path={ROUTES.TOP_STORIES} element={<TopStories />} />
          <Route path={ROUTES.ALL_NEWS} element={<AllNews />} /> */}
        {/* <Route
          path="/"
          element={
            <ProtectedComponent>
              <Main />
            </ProtectedComponent>
          }
        /> */}
        <Route path="*" element={<NotFound />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
