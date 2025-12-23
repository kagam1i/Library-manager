import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsAuth } from "../redux/authSlice";

export const ProtectedRoute = ({ children }) => {
  const isAuth = useSelector(selectIsAuth);

  // если пользователь не авторизован — отправляем на SignIn
  if (!isAuth) {
    return <Navigate to="/signIn" replace />;
  }

  // если авторизован — показываем защищенную страницу
  return children;
};

