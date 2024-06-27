import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { AppLayout } from "./Layouts/AppLayout";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout/>}>
      <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}
