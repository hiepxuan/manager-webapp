import Account from "./app/account/Account"
import Category from "./app/category/Category"
import CreateCategory from "./app/category/createCategory/CreateCategory"
import CreateProduct from "./app/ProductPage/createProduct/CreateProduct"
import ProductContainer from "./app/ProductPage/ProductPage"
import { CreateSlider } from "./app/Slider/CreateSlider"
import { EditSlider } from "./app/Slider/EditSlider"
import { Slider } from "./app/Slider/Slider"

const routes = [
  {
    type: "collapse",
    name: "Sign Up",
    key: "sign-up",
    route: "/product",
    layout: "admin",
    component: <ProductContainer />,
  },
  {
    type: "collapse",
    name: "Sign Up",
    key: "sign-up",
    route: "/product/create",
    layout: "admin",
    component: <CreateProduct />,
  },
  {
    type: "collapse",
    name: "Sign Up",
    key: "sign-up",
    route: "/account",
    layout: "admin",
    component: <Account />,
  },
  {
    type: "collapse",
    name: "Danh mục",
    key: "category",
    route: "/category",
    layout: "admin",
    component: <Category />,
  },
  {
    type: "collapse",
    name: "Danh mục",
    key: "category",
    route: "/category/create",
    layout: "admin",
    component: <CreateCategory />,
  },
  {
    type: "collapse",
    name: "Slider",
    key: "slider",
    route: "/slider",
    layout: "admin",
    component: <Slider />,
  },
  {
    type: "collapse",
    name: "Slider",
    key: "slider",
    route: "/slider/create",
    layout: "admin",
    component: <CreateSlider />,
  },
  {
    type: "collapse",
    name: "Slider",
    key: "slider",
    route: "/slider/edit-slider/:id",
    layout: "admin",
    component: <EditSlider />,
  },
]
export default routes
