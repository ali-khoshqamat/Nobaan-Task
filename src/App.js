import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dialogue from "./components/Dialogue";
import store from "./redux/store";
import routes from "./routes";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Dialogue />
        <Routes>
          {routes.map((route) => (
            <Route {...route} key={route.path} />
          ))}
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
