import Header from "./common/header";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/home";
import Detail from "./pages/detail";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <div>
          <Route path="/" exact component={Home}></Route>
          <Route path="/detail/:id" exact component={Detail}></Route>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
