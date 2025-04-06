import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login.jsx";
import MainLayout from "./layout/MainLayout.jsx";
import HeroSection from "./pages/student/HeroSection.jsx";
import Courses from "./pages/student/Courses.jsx";
import MyLearning from "./pages/student/MyLearning.jsx";
import Profile from "./pages/student/Profile";

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
            <Courses />
          </>
        ),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "my-learning",
        element: <MyLearning />
      },
      {
        path: "profile",
        element: <Profile />
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
