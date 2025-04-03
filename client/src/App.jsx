import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login.jsx";
import Navbar from "./components/Navbar.jsx";
 

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />, 
  },
  
]);

function App() {
  return (
    <main>
      {/* <Navbar/>   */}
      {/* <RouterProvider router={appRouter} /> */}
      <Login/>
    </main>
  );
}

export default App;
