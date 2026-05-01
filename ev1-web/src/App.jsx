import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages/Homepage";
import { DeveloperPage } from "./pages/DeveloperPage";
import { NotFoundPage } from "./pages/NotFounPage";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/desarrollador", element: <DeveloperPage /> },
  { path: "*", element: <NotFoundPage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;