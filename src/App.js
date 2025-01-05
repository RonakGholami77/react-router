import "./App.css";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import NavBar from "./components/NavBar";

function App() {
  let router = useRoutes(routes);
  return (
    <div className="App">
      <NavBar />
      {router}
    </div>
  );
}

export default App;
