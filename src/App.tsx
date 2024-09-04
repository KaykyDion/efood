import { GlobalCss } from "./styles";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <GlobalCss />
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
