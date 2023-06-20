import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import { routes } from "./routes";
import Layout from "./layouts/Layout";
import HomePage from "./pages/HomePage";
import "./App.scss";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      {routes}
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
