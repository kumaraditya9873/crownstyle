import Home from "./Routes/home/home.componets.jsx";
import { Routes, Route } from "react-router-dom";
import Navigation from "./Routes/Navigation/navigation.component.jsx";
import SignIn from "./Routes/signIn/sign-in.components.jsx";
const Shop = () => {
  return <h1>I am in the shopping page</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
