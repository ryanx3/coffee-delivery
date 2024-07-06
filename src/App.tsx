import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/default";
import { GlobalStyle } from "./styles/global";
import { Router } from "./Router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        limit={3}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <CartProvider>
        <GlobalStyle />
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </CartProvider>
    </ThemeProvider>
  );
}
