import { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { UserContext } from "../contexts/UserContext";
import HabitsPage from "../pages/HabitsPage";
import TodayPage from "../pages/TodayPage";

export default function PrivateRoutes({token}) {
  const {user} = useContext(UserContext)
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/habitos" element={<HabitsPage token={token} user={user}/>}/>
      <Route path="/hoje" element={<TodayPage token={token} user={user}/>}/>
      </Routes>
    </BrowserRouter>
  );
}
