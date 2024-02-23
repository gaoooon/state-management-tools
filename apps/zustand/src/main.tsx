import ReactDOM from "react-dom/client";
import GlobalStyle from "./globalStyle";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <GlobalStyle />
    <App />
  </>
);
