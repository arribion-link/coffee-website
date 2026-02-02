import { Outlet } from "react-router-dom";
import Header from "../components/partials/header/Header";
import Footer from "../components/partials/footer/Footer";
const MainLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
