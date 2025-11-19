import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet /> {/* Render Home, Create, Recipe, Edit here */}
      </main>
    </>
  );
};

export default Layout;
