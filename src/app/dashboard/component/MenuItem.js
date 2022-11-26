import { NavLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";

const MenuItem = (props) => {
  const { item, pathname } = props;
  const { title, icon, href } = item;
  return (
    <div className="">
      <NavLink to={href} className={classNames("nav-link")}>
        <span className="IconHolder" data-tooltip={title}>
          <FontAwesomeIcon icon={icon} />
        </span>
        <span className="Title mr-auto">{title}</span>
      </NavLink>
    </div>
  );
};

export default MenuItem;
