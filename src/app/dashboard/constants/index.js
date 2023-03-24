import { faProductHunt } from "@fortawesome/free-brands-svg-icons"
import { faC, faSliders, faUserCircle } from "@fortawesome/free-solid-svg-icons"

export const NAVBAR_MENU = [
  { title: "Danh mục", icon: faC, href: "/a/admin/category" },
  { title: "Tài khoản", icon: faUserCircle, href: "/a/admin/account" },
  { title: "Sản phẩm", icon: faProductHunt, href: "/a/admin/product" },
  { title: "Slider", icon: faSliders, href: "/a/admin/slider" },
]
