import { NavLink, Outlet } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
const WebDev = () => {
  return (
    <div className="webdev">
      <div className="dropdown">
        <Dropdown>
          <Dropdown.Toggle className="opt" id="dropdown-basic">
            Web Development
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item className="opt" href="#/action-1">
              <NavLink className={"btns"} to="roadmaps">
                Roadmaps
              </NavLink>
            </Dropdown.Item>
            <Dropdown.Item className="opt" href="#/action-2">
              <NavLink className={"btns"} to="frontend">
                FrontEnd
              </NavLink>
            </Dropdown.Item>
            <Dropdown.Item className="opt" href="#/action-3">
              <NavLink className={"btns"} to="frameworks">
                Frameworks
              </NavLink>
            </Dropdown.Item>
            <Dropdown.Item className="opt" href="#/action-3">
              <NavLink className={"btns"} to="backend">
                BackEnd
              </NavLink>
            </Dropdown.Item>
            <Dropdown.Item className="opt" href="#/action-3">
              <NavLink className={"btns"} to="projects">
                projects
              </NavLink>
            </Dropdown.Item>
            <Dropdown.Item className="opt" to="websites">
              <NavLink className={"btns"} to="websites">
                Websites to refer
              </NavLink>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default WebDev;
