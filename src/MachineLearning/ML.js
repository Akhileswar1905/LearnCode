import { NavLink, Outlet } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
const ML = () => {
  return (
    <div className="ml">
      <div className="dropdown">
        <Dropdown>
          <Dropdown.Toggle className="opt" id="dropdown-basic">
            Machine Learning
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item className="opt" href="#/action-1">
              <NavLink className={"btns"} to="python">
                Python
              </NavLink>
            </Dropdown.Item>
            <Dropdown.Item className="opt" href="#/action-2">
              <NavLink className={"btns"} to="supervised">
                Supervised Machine Learning
              </NavLink>
            </Dropdown.Item>
            <Dropdown.Item className="opt" href="#/action-3">
              <NavLink className={"btns"} to="unsupervised">
                Unsupervised Machine Learning
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

export default ML;
