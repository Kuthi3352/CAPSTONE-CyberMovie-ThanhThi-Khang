import { useRoutes } from "react-router-dom";
import { router } from "./routes";
import "assets/style.css";

function App() {
  return (
    <>
      <div>{useRoutes(router)}</div>
    </>
  );
}

export default App;
