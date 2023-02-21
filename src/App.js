import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dialogue from "./components/Dialogue";
import routes from "./routes";

function App() {
  return (
    <div className="App">
      <Dialogue />
      <Routes>
        {routes.map((route) => (
          <Route {...route} key={route.path} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
