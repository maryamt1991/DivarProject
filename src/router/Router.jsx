import { Route, Routes } from "react-router-dom";
import AuthPage from "../pages/AuthPage";
import HomePage from "../pages/HomePage";
import DashboardPage from "../pages/DashboardPage";
import Adminpage from "../pages/Adminpage";
import ErrorPage from "../pages/ErrorPage";

function Router() {
  return (
    <Routes>
    <Route index element={<HomePage/>}/>
    <Route path="/dashboard" element={<DashboardPage/>}/>
    <Route path="/admin" element={<Adminpage/>}/>
    <Route path="/auth" element={<AuthPage/>}/>
    <Route path="*" element={<ErrorPage/>}/>
  </Routes>
  )
}

export default Router