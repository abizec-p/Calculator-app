import { Link } from "react-router-dom";
import "./style.css";
import { CiCalculator1, CiPercent } from "react-icons/ci";
import { IoCalendarNumber } from "react-icons/io5";
import { GiMaterialsScience } from "react-icons/gi";
import { TbHours12,TbFilePercent  } from "react-icons/tb";



function Sidebar() {
  return (
    <section>
      <div className="sidebar">
        <h1>Calculator App</h1>
        <div className="calculator-type">
            <h3>Categories</h3>
          <Link to="/">
            <span>
              <CiCalculator1 />
            </span>
            Simple calculator
          </Link>
          <Link to="/age">
            <span>
              <IoCalendarNumber />
            </span>
            Age calculator
          </Link>
          <Link>
            <span>
              <CiPercent />
            </span>
            Interest calculator
          </Link>
          <Link>
            <span>
<GiMaterialsScience />
            </span>
            Scientific calculator
          </Link>
          <Link>
            <span>
<TbHours12 />
            </span>
            Hours calculator
          </Link>
          <Link>
            <span>
              <TbFilePercent  />
            </span>
            Grade calculator
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Sidebar;
