import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { ROUTES } from "../constant/routes";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

// Untuk bisa menggunakan useAuthState, kita membutuhkan auth dari authentication/firebase
import { auth } from "../auth/firebase";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  //   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const query = new URL(window.location.href);
  const navigate = useNavigate();
  const [user, isLoading] = useAuthState(auth);

  return <Route {...rest} render={(props) => (user ? <Component {...props} /> : navigate("/login"))} />;
};
