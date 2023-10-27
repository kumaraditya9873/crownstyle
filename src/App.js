import Home from "./Routes/home/home.componets.jsx";
import { Routes, Route } from "react-router-dom";
import Navigation from "./Routes/Navigation/navigation.component.jsx";
import Authentication from "./Routes/authentication/authentication.components.jsx";
import Shop from "./Routes/shop/shop.component.jsx";
import Checkout from "./Routes/checkout/checkout.component.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
