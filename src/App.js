import '../src/App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Layout from "./components/Layout"
import Dashboard from "./components/Dashboard"
import Analytics from "./components/Analytics"
import Triages from "./components/Triages"
import Calendar from "./components/Calendar"
import AdminQueries from "./components/AdminQueries"
import RequestSupport from "./components/RequestSupport"
import Login from "./components/Login"

function App() {
  const router = createBrowserRouter([
    {
      // parent route component
      element: <Layout />,
      // child route components
      children: [
        {
          path: "/",
          element: <Dashboard />,
        },
        {
          path: "/Analytics",
          element: <Analytics />,
        },
        {
          path: "/Triages",
          element: <Triages />,
        },
        {
          path: "/Calendar",
          element: <Calendar />,
        },
        {
          path: "/AdminQueries",
          element: <AdminQueries />,
        },
        {
          path: "/RequestSupport",
          element: <RequestSupport />,
        },
        {
          path: "/Login",
          element: <Login />,
        },
      ],
    },
  ])

  return (
      <RouterProvider router={router} />
  )
}

export default App