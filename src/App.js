import Home from "./Routes/home/home.componets.jsx";
import { Routes, Route } from "react-router-dom";
import Navigation from "./Routes/Navigation/navigation.component.jsx";
import Authentication from "./Routes/authentication/authentication.components.jsx";
const Shop = () => {
  return <h1>I am in the shopping page</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
