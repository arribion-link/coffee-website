import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./auth/Login";
import Register from "./auth/Register"
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import NotFoundPage from "./pages/NotFoundPage";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Offer from "./pages/Offer";
import Packaging from "./pages/Packaging";
import Process from "./pages/Process";
import Special from "./pages/Special";
const App = () => {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/offer" element={<Offer />} />
          <Route path="/packaging" element={<Packaging />} />
          <Route path="/process" element={<Process />} />
          <Route path="/coffeepoint/special" element={<Special />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
