import classNames from "classnames"
import { useContext, useEffect } from "react"
import { Navigate, Route, Routes, useNavigate } from "react-router-dom"
import routes from "../../../_routes"
import { DataContext } from "../../../context/AppContext"
import Admin from "../../../layouts/Admin"
import NavbarLeft from "./NavbarLeft"
import NavbarTop from "./NavbarTop"

const Dashboard = (props) => {
  const isAuth = true
  const navigate = useNavigate()
  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.route) {
        const Page = route.component
        const LayOut = Admin
        return (
          <Route
            path={`/admin${route.route}`}
            element={<LayOut data={route.props}>{Page}</LayOut>}
            key={route.key}
          />
        )
      }

      return null
    })

  const { isCollapsed } = useContext(DataContext)
  useEffect(() => {
    if (!isAuth) navigate("/sign-up")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuth])

  return (
    <div className={classNames("DashboardContainer", { isCollapsed })}>
      <NavbarLeft />

      <div className="DashboardInner">
        <NavbarTop />

        <div className="MainContent">
          <div className="MainContentInner">
            <Routes>
              {getRoutes(routes)}
              <Route path="/" element={<Navigate to="/a/admin/product" />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
