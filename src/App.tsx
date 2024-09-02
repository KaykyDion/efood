import { GlobalCss } from "./styles";
import { RouterProvider } from "react-router-dom";
import router from "./router";

function App() {
  return (
    <>
      <GlobalCss />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
