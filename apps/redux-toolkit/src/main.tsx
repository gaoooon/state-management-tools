import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "react-redux";
import GlobalStyle from "./globalStyle.ts";
import store from "./store/index.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>
);
