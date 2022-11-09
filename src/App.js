import classNames from "classnames";
import { useContext } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import NavbarLeft from "./app/dashboard/component/NavbarLeft";
import NavbarTop from "./app/dashboard/component/NavbarTop";
import { DataContext } from "./context/AppContext";
import Admin from "./layouts/Admin";
import routes from "./_routes";

function App() {
  const location = useLocation();
  const { pathname } = location;
  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      // if (route.collapse) {
      //   return getRoutes(route.collapse);
      // }

      if (route.route) {
        const Page = route.component;
        const LayOut = Admin;
        return (
          <Route
            path={`/admin${route.route}`}
            element={<LayOut data={route.props}>{Page}</LayOut>}
            key={route.key}
          />
        );
      }

      return null;
    });
  const { isCollapsed } = useContext(DataContext);

  return (
    <div className={classNames("DashboardContainer", { isCollapsed })}>
      <NavbarLeft pathname={pathname} />

      <div className="DashboardInner">
        <NavbarTop />

        <div className="MainContent">
          <div className="MainContentInner">
            <Routes>
              {getRoutes(routes)}
              <Route path="/" element={<Navigate to="/a" />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
