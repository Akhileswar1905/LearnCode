import Basics from "./Libraries/Basics";
import Numpy from "./Libraries/Numpy";
import Pandas from "./Libraries/Pandas";
import Matplotlib from "./Libraries/Matplotlib";
import Seaborn from "./Libraries/Seaborn";
import Sklearn from "./Libraries/Sklearn";

const Python = () => {
  return (
    <div className="python">
      <Basics />
      <Numpy />
      <Pandas />
      <Matplotlib />
      <Seaborn />
      <Sklearn />
    </div>
  );
};

export default Python;
