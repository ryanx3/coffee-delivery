import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { AppLayoutContainer } from "./styles";

export function AppLayout() {
  return (
    <AppLayoutContainer>
      <Header />
      <Outlet />
    </AppLayoutContainer>
  );
}
