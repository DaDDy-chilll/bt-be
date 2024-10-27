import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "@material-tailwind/react";
import { Provider } from "react-redux";
import store from "./store/store.ts";
import "./assets/css/index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <ThemeProvider>
      {/* <React.StrictMode> */}
      <ToastContainer style={{ color: "red" }} />
      <App />
      {/* </React.StrictMode> */}
    </ThemeProvider>
  </Provider>
);
