import { Link } from "react-router-dom";

interface Props {}

const NavBar: React.FC<Props> = (props) => {
  return (
    <nav>
      <h1>Comments</h1>
      <div>
        <ul>
          <li>
            <Link to="/link1">Link1</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default NavBar;
