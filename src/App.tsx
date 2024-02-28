import { Route, Routes } from "react-router-dom";
import { Categories } from "./recipes/Categories";
import Recipe from "./recipes/Recipe";
import RecipeForm from "./recipes/RecipeForm";
import Login from "./security/Login";
//import Logout from "./security/_Logout";
import Layout from "./Layout";
import Home from "./Home";
import "./App.css";
import RecipesLayout from "./recipes/RecipesLayout.tsx";
import {useAuth} from "./security/AuthProvider.tsx";
import Logout from "./security/Logout.tsx";
import RequireAuth from "./security/RequireAuth.tsx";

export default function App() {
  const auth = useAuth();
  auth.isLoggedIn();
  return (
    <Layout>
      <Routes>
        <Route path="*" element={<h2>Not Found</h2>} />
        <Route path="/" element={<Home />} />
        <Route path="/categories/" element={<Categories />} />
        <Route path="/recipes" element={<RecipesLayout/>}>
          <Route path=":id" element={<Recipe />} />
          <Route path="test" element={<h1>Test</h1>} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/add"
               element={
                 <RequireAuth roles={["ADMIN"]}>
                   <RecipeForm />
                 </RequireAuth>
               }
        />
      </Routes>
    </Layout>
  );
}
