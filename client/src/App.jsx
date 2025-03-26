import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login.jsx";
 

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />, 
  },
  
]);

function App() {
  return (
    <main>
      <RouterProvider router={appRouter} />
    </main>
  );
}

export default App;
