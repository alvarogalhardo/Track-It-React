import { BrowserRouter, Routes, Route } from "react-router-dom";
import HabitsPage from "../pages/HabitsPage";

export default function PrivateRoutes() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/habitos" element={<HabitsPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}
