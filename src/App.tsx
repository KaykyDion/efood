import { GlobalCss } from "./styles";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { Provider } from "react-redux";
import store from "./store";
import Cart from "./components/Cart";

function App() {
  return (
    <Provider store={store}>
      <GlobalCss />
      <RouterProvider router={router} />
      <Cart />
    </Provider>
  );
}

export default App;
