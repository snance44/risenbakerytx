import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import PriceScreen from "./screens/PriceScreen";
import PriceListScreen from "./screens/PriceListScreen";
import ReviewScreen from "./screens/ReviewScreen";
import ContactScreen from "./screens/ContactScreen";
import AboutScreen from "./screens/AboutScreen";
import ProductScreen from "./screens/ProductScreen";
import LoginScreen from "./screens/LoginScreen";
import UserListScreen from "./screens/UserListScreen";
import UserEditScreen from "./screens/UserEditScreen";
import ProductListScreen from "./screens/ProductListScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import PriceEditScreen from "./screens/PriceEditScreen";
import axios from "axios";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const App = () => {
  const [clientID, setClientID] = useState("");

  useEffect(() => {
    const getClientId = async () => {
      const { data: clientId } = await axios.get("/api/config/paypal");

      setClientID(clientId);
    };

    if (!window.paypal) {
      getClientId();
    }
  }, []);

  return (
    <>
      {clientID && (
        <PayPalScriptProvider options={{ "client-id": clientID }}>
          <Router>
            <Header />
            <main className="py-3">
              <Container>
                <Routes>
                  <Route path="/" element={<HomeScreen />} exact />
                  <Route path="/login" element={<LoginScreen />} />
                  <Route path="/prices" element={<PriceScreen />} />
                  <Route path="/reviews" element={<ReviewScreen />} />
                  <Route path="/contactus" element={<ContactScreen />} />
                  <Route path="/aboutus" element={<AboutScreen />} />
                  <Route path="/product/:id" element={<ProductScreen />} />
                  <Route path="/admin/userlist" element={<UserListScreen />} />
                  <Route path="/admin/pricelist" element={<PriceListScreen />} />
                  <Route
                    path="/admin/price/:id/edit"
                    element={<PriceEditScreen />}
                  />
                  <Route
                    path="/admin/user/:id/edit"
                    element={<UserEditScreen />}
                  />
                  <Route
                    path="/admin/productlist"
                    element={<ProductListScreen />}
                  />
                  <Route
                    path="/admin/product/:id/edit"
                    element={<ProductEditScreen />}
                  />
                </Routes>
              </Container>
            </main>
            <Footer />
          </Router>
        </PayPalScriptProvider>
      )}
    </>
  );
};
export default App;
