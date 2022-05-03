import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Dialog from "@mui/material/Dialog";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// CSS
import "./css/App.scss";

// Screens
import { Header, Header_Dashboard } from "./components";
import Home from "./screens/Home";
import Dashboard from "./screens/Dashboard";
import Loign from "./screens/LoginPage";
import Signup from "./screens/SignupPage";
import Sidebar from "./components/Sidebar";
import NewOrder from "./screens/NewOrder";
import Customers from "./screens/Customers";
import Transaction from "./screens/Transaction";
import Inventory from "./screens/Inventory";
import Orders from "./screens/Orders";
import Products from "./screens/Products";
import Forms from "./screens/Forms";
import SaleTeam from "./screens/SaleTeam";
import CatzaStore from "./screens/CatzaStore";
import Coupons from "./screens/Coupons";
import ShippingNew from "./screens/ShippingNew";
import OrderSetting from "./screens/OrderSetting";
import Payment from "./screens/Payment";
import Checkout from "./screens/Checkout";
import AdvanceSetup from "./screens/AdvanceSetup";
import Setting from "./screens/Setting";

function App() {
  const dispatch = useDispatch();
  // const { user } = useSelector((state) => state.general);
  const { user, sidebar, isUser } = useSelector((state) => state);
  var token = localStorage.getItem("token");
  return (
    <div className="App">
      {user || isUser || token ? (
        <div className="admin rel">
          <BrowserRouter>
            <Sidebar />
            <Header_Dashboard />
            <Route path="/home" component={Dashboard} exact />
            <Route path="/admin/orders-new" component={NewOrder} exact />
            <Route path="/admin/customers" component={Customers} exact />
            <Route path="/admin/transaction" component={Transaction} exact />
            <Route
              path="/admin/products-inventory"
              component={Inventory}
              exact
            />
            <Route path="/admin/orders" component={Orders} exact />
            <Route path="/admin/products" component={Products} exact />
            <Route path="/admin/forms" component={Forms} exact />
            <Route path="/admin/sales-team" component={SaleTeam} exact />
            <Route path="/admin/catza-store" component={CatzaStore} exact />
            <Route path="/admin/coupons" component={Coupons} exact />
            <Route path="/admin/shipping-new" component={ShippingNew} exact />
            <Route
              path="/admin/order-settings"
              component={OrderSetting}
              exact
            />
            <Route path="/admin/payment" component={Payment} exact />
            <Route path="/admin/checkout" component={Checkout} exact />
            <Route
              path="/admin/settings/advance-new"
              component={AdvanceSetup}
              exact
            />
            <Route path="/admin/settings" component={Setting} exact />
          </BrowserRouter>
        </div>
      ) : (
        <div>
          <BrowserRouter>
            <ToastContainer />
            <Header />
            <Route path="/" component={Home} exact />
            <Route path="/login" component={Loign} exact />
            <Route path="/signup" component={Signup} exact />
          </BrowserRouter>
        </div>
      )}
    </div>
  );
}

export default App;
