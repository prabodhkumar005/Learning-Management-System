import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login.jsx";
import Navbar from "./components/Navbar.jsx";

// Define your router configuration
// const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <Login />
//   },
//   {
//     path:"/navbar",
//     element:<Navbar /> 
//   },
// ]);

function App() {
  return (
    <main>
      /* <Navbar />  
      {/* Wrap the routing provider around the rest of the app */}
      {/* <RouterProvider router={appRouter} />  */}
      <Login/>
    </main>
  );
}

export default App;
