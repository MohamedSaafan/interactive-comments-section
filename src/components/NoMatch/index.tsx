import Home from "../../pages/Home";

interface Props {}

const NoMatch: React.FC<Props> = (props) => {
  return (
    <div>
      <h1>No Route Matched</h1> <Home />
    </div>
  );
};
export default NoMatch;
