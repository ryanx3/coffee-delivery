import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { AppLayout } from "./Layouts/AppLayout/default";
import { Checkout } from "./pages/Checkout";
import { Success } from "./pages/Success";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout/>}>
      <Route path="/" element={<Home />} />
      <Route path="/success" element={<Success />} />
      <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}
