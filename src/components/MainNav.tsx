import { NavLink } from "react-router-dom";

function MainNav() {
  return (
    <>
      <nav>
        <ul className="flex flex-col space-y-3">
          <li className="">
            <NavLink
              to={`dashboard`}
              className={({ isActive }) =>
                ` ${isActive ? "active link" : "link"}`
              }
            >
              Home
            </NavLink>
          </li>
          <li className="">
            <NavLink
              to={`transactions`}
              className={({ isActive }) =>
                ` ${isActive ? "active link" : "link"}`
              }
            >
              Transaction
            </NavLink>
          </li>
          <li className="">
            <NavLink
              to={`budget`}
              className={({ isActive }) =>
                `${isActive ? "active link" : "link"}`
              }
            >
              Budget
            </NavLink>
          </li>
          <li className="">
            <NavLink
              to={`goal`}
              className={({ isActive }) =>
                ` ${isActive ? "active link" : "link"}`
              }
            >
              Goal
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default MainNav;
