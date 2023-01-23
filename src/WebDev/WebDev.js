import { NavLink, Outlet } from "react-router-dom";
const WebDev = () => {
  return (
    <div className="webdev">
      <nav className="wnav">
        <NavLink className={"btns"} to="roadmaps">
          Roadmaps
        </NavLink>
        <NavLink className={"btns"} to="frontend">
          FrontEnd
        </NavLink>
        <NavLink className={"btns"} to="frameworks">
          Frame Works
        </NavLink>
        <NavLink className={"btns"} to="backend">
          BackEnd
        </NavLink>
        <NavLink className={"btns"} to="projects">
          Projects
        </NavLink>
        <NavLink className={"btns"} to="websites">
          Websites To Learn Web Development
        </NavLink>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default WebDev;
