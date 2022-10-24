import { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { ProgressContext } from "../contexts/ProgressContext";
import HabitsPage from "../pages/HabitsPage";
import HistoryPage from "../pages/HistoryPage";
import TodayPage from "../pages/TodayPage";

export default function PrivateRoutes({ token }) {
  const { user } = useContext(UserContext);
  const { progress } = useContext(ProgressContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/habitos"
          element={<HabitsPage token={token} user={user} progress={progress} />}
        />
        <Route
          path="/hoje"
          element={<TodayPage token={token} user={user} progress={progress} />}
        />
        <Route
          path="/historico"
          element={
            <HistoryPage token={token} user={user} progress={progress} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
