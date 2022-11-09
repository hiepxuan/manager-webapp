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
    component: <ProductContainer />,
  },
  {
    type: "collapse",
    name: "Sign Up",
    key: "sign-up",
    route: "/product/create",
    component: <CreateProduct />,
  },
  {
    type: "collapse",
    name: "Sign Up",
    key: "sign-up",
    route: "/account",
    component: <Account />,
  },
  {
    type: "collapse",
    name: "Sign Up",
    key: "sign-up",
    route: "/account/tets",
    component: <Category />,
  },
];
export default routes;
