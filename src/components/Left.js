import { NavLink } from "react-router-dom";

const Left = (props) => {
  const desc = "Some Image";
  return (
    <div className="leftbox">
      <div className="desc">
        <p>{props.desc}</p>
        <NavLink to={props.link}>Click Here To Learn</NavLink>
      </div>
      <img src={props.src} alt={desc} />
    </div>
  );
};

export default Left;
