import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ user, children }) => {
  // если пользователь не авторизован — отправляем на SignIn
  if (!user) {
    return <Navigate to="/signIn" replace />;
  }

  // если авторизован — показываем защищенную страницу
  return children;
};

