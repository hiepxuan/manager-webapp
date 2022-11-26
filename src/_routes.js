import Account from "./app/account/Account";
import Category from "./app/category/Category";
import CreateProduct from "./app/ProductPage/createProduct/CreateProduct";
import ProductContainer from "./app/ProductPage/ProductPage";

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
    name: "Sign Up",
    key: "sign-up",
    route: "/account/tets",
    layout: "admin",
    component: <Category />,
  },
];
export default routes;
