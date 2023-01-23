import NODE from "./BackEnd/NODE";
import Django from "./BackEnd/Django";
import PHP from "./BackEnd/PHP";
import MongoDB from "./BackEnd/MongoDB";
import MySQL from "./BackEnd/MqSQL";
const BackEndLayout = () => {
  return (
    <div className="backend">
      <NODE></NODE>
      <Django />
      <PHP />
      <MongoDB />
      <MySQL />
    </div>
  );
};

export default BackEndLayout;
