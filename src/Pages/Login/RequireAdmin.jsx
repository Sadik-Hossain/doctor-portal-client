import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../firebase.init";
import UseAdmin from "../../hooks/UseAdmin";
import Loading from "../Shared/Loading/Loading";
import { signOut } from "firebase/auth";
const RequireAdmin = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const [admin, adminLoading] = UseAdmin(user);
  const location = useLocation();

  if (loading || adminLoading) {
    return <Loading />;
  }

  //* user na thakle login e pathaba
  if (!user || !admin) {
    signOut(auth);
    //* from: <- je jayga theke user ke login e pathabe
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  return children;
};

export default RequireAdmin;
