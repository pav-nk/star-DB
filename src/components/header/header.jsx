import "./header.css";

const Header = () => {
  return (
    <div className="header d-flex">
      <h3>
        <a href="#">Star_DB</a>
      </h3>
      <ul className="d-flex">
        <li>
          <a href="#">Characters</a>
        </li>
        <li>
          <a href="#">Locations</a>
        </li>
        <li>
          <a href="#">Organizations</a>
        </li>
        <li>
          <a href="#">Droids</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
