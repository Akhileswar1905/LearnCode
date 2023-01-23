import Tailwind from "./Frameworks/CSSFrameworks/Tailwind";
import Bootstrap from "./Frameworks/CSSFrameworks/Bootstrap";
import ReactJS from "./Frameworks/JavaScriptFrameworks.js/React";
import AngularJS from "./Frameworks/JavaScriptFrameworks.js/Angular";
const FrameWorks = () => {
  return (
    <div className="frameworks">
      <Tailwind></Tailwind>
      <Bootstrap></Bootstrap>
      <ReactJS />
      <AngularJS />
    </div>
  );
};

export default FrameWorks;
