import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import PriceScreen from "./screens/PriceScreen";
import PriceListScreen from "./screens/PriceListScreen";
import ContactScreen from "./screens/ContactScreen";
import AboutScreen from "./screens/AboutScreen";
import RegisterScreen from "./screens/RegisterUserScreen";
import LoginScreen from "./screens/LoginScreen";
import UserListScreen from "./screens/UserListScreen";
import UserEditScreen from "./screens/UserEditScreen";

import PriceEditScreen from "./screens/PriceEditScreen";
import NewPriceScreen from "./screens/PriceScreen";
import PhotoScreen from "./screens/PhotoScreen";
import PhotoListScreen from "./screens/PhotoListScreen";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <main className="py-3 m-body">
          <Container>
            <Routes>
              <Route path="/" element={<HomeScreen />} exact />
              <Route path="/login" element={<LoginScreen />} />
              <Route path="/prices" element={<PriceScreen />} />
              <Route path="/photos" element={<PhotoScreen />} />
              <Route path="/admin/photolist" element={<PhotoListScreen />} />
              <Route path="/contactus" element={<ContactScreen />} />
              <Route path="/aboutus" element={<AboutScreen />} />
              <Route path="/admin/userlist" element={<UserListScreen />} />
              <Route path="/admin/registeruser" element={<RegisterScreen />} />
              <Route path="/admin/pricelist" element={<PriceListScreen />} />
              <Route
                path="/admin/price/:id/edit"
                element={<PriceEditScreen />}
              />
              <Route path="/admin/user/:id/edit" element={<UserEditScreen />} />
              
              <Route path="/newprices" element={<NewPriceScreen />} />
            </Routes>
          </Container>
        </main>
        <Footer />
      </Router>
    </>
  );
};
export default App;
