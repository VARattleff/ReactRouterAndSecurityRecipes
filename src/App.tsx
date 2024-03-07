import { Route, Routes } from "react-router-dom";
import { Categories } from "./recipes/Categories";
import Recipe from "./recipes/Recipe";
import Recipes from "./recipes/RecipeList";
import RecipeForm from "./recipes/RecipeForm";
import Login from "./security/Login";
import Layout from "./Layout";
import Home from "./Home";
import "./App.css";
import RecipesLayout from "./recipes/RecipesLayout.tsx";
import Logout from "./security/Logout.tsx";
import RequireAuth from "./security/RequireAuth.tsx";
import {AddCategory} from "./recipes/AddCategory.tsx";

export default function App() {
    //const auth = useAuth();
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/categories/" element={<Categories />} />
                <Route path="*" element={<h2>Not Found</h2>} />
                <Route path="/recipes" element={<RecipesLayout />}>
                    <Route index element={<Recipes />} />
                    <Route path=":id" element={<Recipe />} />
                </Route>
                <Route path="/add"
                       element={
                           <RequireAuth roles={["ADMIN"]}>
                               <RecipeForm />
                           </RequireAuth>
                       }
                />
                <Route path="/addCategory"
                       element={
                           <RequireAuth roles={["ADMIN"]}>
                               <AddCategory />
                           </RequireAuth>
                       }
                />
                <Route path="/login" element={<Login />} />
                <Route path="/logout" element={<Logout />} />
            </Routes>
        </Layout>
    );
}