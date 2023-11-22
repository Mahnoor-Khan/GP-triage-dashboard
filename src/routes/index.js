import React from "react"
import PathConstants from "./pathConstants"

const Dashboard = React.lazy(() => import("../components/Dashboard"))
const Analytics = React.lazy(() => import("../components/Analytics"))
const Triages = React.lazy(() => import("../components/Triages"))
const Calendar = React.lazy(() => import("../components/Calendar"))
const AdminQueries = React.lazy(() => import("../components/AdminQueries"))
const RequestSupport = React.lazy(() => import("../components/RequestSupport"))
const Login = React.lazy(() => import("../components/Login"))

const routes = [
    { path: PathConstants.DASHBOARD, element: <Dashboard /> },
    { path: PathConstants.ANALYTICS, element: <Analytics /> },
    { path: PathConstants.TRIAGES, element: <Triages /> },
    { path: PathConstants.CALENDAR, element: <Calendar /> },
    { path: PathConstants.ADMINQUERIES, element: <AdminQueries /> },
    { path: PathConstants.REQUESTSUPPORT, element: <RequestSupport /> },
    { path: PathConstants.LOGIN, element: <Login /> },
]

export default routes