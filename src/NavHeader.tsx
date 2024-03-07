import { NavLink} from "react-router-dom";
import AuthStatus from "./security/AuthStatus";
import {useAuth} from "./security/AuthProvider.tsx";
import {Fragment} from "react";

export default function NavHeader() {
  const auth = useAuth();
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/categories">Categories</NavLink>
        </li>
        <li>
           <NavLink to="/recipes">Recipes</NavLink>
        </li>
        <Fragment>
          {auth.isLoggedIn() && auth.isLoggedInAs(["ADMIN"]) && (
              <li>
                <NavLink to="/add">Add</NavLink>
                <NavLink to="/addCategory">Add Category</NavLink>
              </li>
          )}
        </Fragment>
        <AuthStatus />
      </ul>
    </nav>
  );
}
