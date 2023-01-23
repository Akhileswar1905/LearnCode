import { NavLink, Outlet } from "react-router-dom";
const ML = () => {
  return (
    <div className="ml">
      <nav className="mlnav">
        <NavLink className={"btns"} to="python">
          Python
        </NavLink>
        <NavLink className={"btns"} to="supervised">
          Supervised Machine Learning
        </NavLink>
        <NavLink className={"btns"} to="unsupervised">
          Unsupervised Machine Learning
        </NavLink>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default ML;
