import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import store from "./redux/Store";
import AppRoutes from "./routes/AppRoutes";
import "./style.css";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <Header></Header>
          {/* <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/home" element={<Home></Home>}></Route>
          </Routes> */}
          <div className="container shadow mt-4">
            <AppRoutes />
          </div>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
