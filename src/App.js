import { Route, Routes } from "react-router-dom";
import "./App.css";
import routes from "./routes";

function App() {
  return (
    <div className="App">
      <Routes>
        {routes.map((route) => (
          <Route {...route} key={route.path} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
