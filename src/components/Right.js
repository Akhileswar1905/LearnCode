import { NavLink } from "react-router-dom";

const Right = (props) => {
  const desc = "Some Image";
  return (
    <div className="rightbox">
      <img src={props.src} alt={desc} />
      <div className="desc">
        <p>{props.desc}</p>
        <NavLink to={props.link}>Click Here to Learn</NavLink>
      </div>
    </div>
  );
};

export default Right;
