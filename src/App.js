import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Dialogue from "./components/Dialogue";
import Layout from "./layout/Layout";
import store from "./redux/store";
import routes from "./routes";

function App() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-700">
      <Provider store={store}>
        <Layout>
          <Dialogue />
          <Routes>
            {routes.map((route) => (
              <Route {...route} key={route.path} />
            ))}
          </Routes>
        </Layout>
      </Provider>
    </div>
  );
}

export default App;
