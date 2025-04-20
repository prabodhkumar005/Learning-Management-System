import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login.jsx";
import MainLayout from "./layout/MainLayout.jsx";
import HeroSection from "./pages/student/HeroSection.jsx";
import Course from "./pages/student/Course.jsx";
import MyLearning from "./pages/student/MyLearning.jsx";
import Profile from "./pages/student/Profile";
import Dashboard from "./pages/admin/Dashboard";
import CourseTable from "./pages/admin/course/CourseTable";
import Sidebar from "./pages/admin/Sidebar";
import AddCourse from "./pages/admin/course/AddCourse";
import EditCourse from "./pages/admin/course/EditCourse";
import CourseDetails from "./pages/student/CourseDetails";
import Quiz from "./pages/student/Quiz";
import SearchResults from "./pages/student/SearchResult";

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
            <Course />
          </>
        ),
      },
      {
        path:"/course/:id" ,
        element:<CourseDetails />
      },
      {
        path:"/course/search",
         element:<SearchResults />
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
        path: "quiz",
        element: <Quiz />
      },
      {
        path: "profile",
        element: <Profile />
      },
      {
        path:"admin",
        element:<Sidebar/>,
        children:[
          {
            path:"dashboard",
            element:<Dashboard/>
          },
          {
            path:"course",
            element:<CourseTable/>
          },
          {
            path:"course/create",
            element:<AddCourse/>
          },
          {
            path: "course/:courseId",
            element: <EditCourse />,
          },
        ]
      }
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
