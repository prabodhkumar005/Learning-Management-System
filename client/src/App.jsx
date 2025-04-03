import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login.jsx";
import MainLayout from "./layout/MainLayout.jsx";
import HeroSection from "./pages/student/HeroSection.jsx";

// Define your router configuration
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: (
          <>
            <HeroSection />
            {/* <Courses /> */}
          </>
        ),
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
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
