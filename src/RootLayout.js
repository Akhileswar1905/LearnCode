import { NavLink, Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <h1 className="title">LearnCode</h1>
          <div className="links">
            <NavLink to="/">Home</NavLink>
            <NavLink className={"web"} to="/webdev">
              Web Development
            </NavLink>
            <NavLink to="/ml">Machine Learning</NavLink>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
