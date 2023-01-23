import DecisionTree from "./DecisionTree";
import LinearRegression from "./LinearRegression";
import LogisticRegression from "./LogisticRegression";

const Supervised = () => {
  return (
    <div className="supervised">
      <LinearRegression />
      <LogisticRegression />
      <DecisionTree />
    </div>
  );
};

export default Supervised;
