import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route} from "react-router-dom";
import Home from "./component/Home";
import LoginPage from "./component/LoginPage";
import NavigationBar from "./component/NavigationBar";
import Contact from "./component/Contact";
import Product from "./component/Product";
import Registration from "./component/Registration";
import AddProduct from "./component/AddProduct";
import Cart from "./component/Cart";

function App() {
  
   return (
    <BrowserRouter>
      <div>
              <Route exact path="/" component={LoginPage} />
        <Route
          path="/NavigationBar"
          component={localStorage.getItem("token") ? NavigationBar : LoginPage}
        />
        <Route
          exact
          path="/NavigationBar/Home"
          component={localStorage.getItem("token") ? Home : LoginPage}
        />
        <Route
          exact
          path="/NavigationBar/Contact"
          component={localStorage.getItem("token") ? Contact : LoginPage}
        />
        <Route
          exact
          path="/NavigationBar/Product"
          component={localStorage.getItem("token") ? Product : LoginPage}
        />
        <Route
          exact
          path="/NavigationBar/AddProduct"
          component={localStorage.getItem("token") ? AddProduct : LoginPage}
        />
        <Route
          exact
          path="/NavigationBar/Cart" 
          component={localStorage.getItem("token") ? Cart : LoginPage}
        />
        <Route exact path="/LoginPage" component={LoginPage} />
        <Route exact path="/Registration" component={Registration} />
      </div>

    </BrowserRouter>
  );
}

export default App;
