import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";

import BusinessesPage from "./pages/BusinessesPage";
import BusinessDetailPage from "./pages/BusinessDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BusinessesPage />,
    errorElement: <h1>Page Not Found!!</h1>,
  },
  {
    path: "/detail/:alias",
    element: <BusinessDetailPage />,
    errorElement: <h1>Page Not Found!!</h1>,
  },
]);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>62Teknologi Frontend Test 2023</h1>
        <hr />
        <RouterProvider router={router} />
      </header>
    </div>
  );
}

export default App;
