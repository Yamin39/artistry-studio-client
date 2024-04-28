import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import AddCraftItem from "../pages/AddCraftItem/AddCraftItem";
import AllArtsCraftsItems from "../pages/AllArtsCraftsItems/AllArtsCraftsItems";
import CraftItemDetails from "../pages/CraftItemDetails/CraftItemDetails";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/add-craft-item",
        element: (
          <PrivateRoute>
            <AddCraftItem></AddCraftItem>
          </PrivateRoute>
        ),
      },
      {
        path: "/craft-items/:id",
        loader: ({ params }) => fetch(`http://localhost:5000/craft-items/${params.id}`),
        element: (
          <PrivateRoute>
            <CraftItemDetails></CraftItemDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/all-art-&-craft-items",
        element: <AllArtsCraftsItems></AllArtsCraftsItems>,
      },
    ],
  },
]);

export default router;
