import { Link } from "react-router-dom";
import "./style.css";
import { CiCalculator1, CiPercent } from "react-icons/ci";
import { IoCalendarNumber } from "react-icons/io5";
import { GiMaterialsScience } from "react-icons/gi";
import { TbHours12, TbFilePercent } from "react-icons/tb";
import { MdArrowBackIos } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";




import logo from "../assets/images/logo.svg";

function Sidebar({ isClicked,setIsClicked, ToggleSidebar }) {
  return (
    <section>
      <div className={isClicked ? "clicked-sidebar" : "sidebar"}>
        <div className={isClicked ? "clicked-header" : "header"}>
          <img src={logo} alt="" />
          <h1>Calculator App</h1>
         
        </div>
        <div className={isClicked ? "clicked-calculator-type" : "calculator-type"}        >
          <div className="category">
            <h3>Categories</h3>  <div onClick={ToggleSidebar} className={isClicked?"clicked-toggle-button":"toggle-button"}>
              <IoMdMenu className="ham" />

           
          </div>
          </div>
          <Link onClick={()=>{setIsClicked(false)}} to="/">
            <div className="icons calculator">
              <CiCalculator1 />
            </div>
            <div className="side-menu simple">Simple calculator</div>
          </Link>
          <Link onClick={()=>{setIsClicked(false)}} to="/age">
            <div className="icons calendar">
              <IoCalendarNumber />
            </div>
            <div className="side-menu age">Age calculator</div>
          </Link>
          <Link onClick={()=>{setIsClicked(false)}} to="/interest">
            <div className="icons percent">
              <CiPercent />
            </div>
            <div className="side-menu interest"> Interest calculator</div>
          </Link>
          <Link onClick={()=>{setIsClicked(false)}} to="/scientific">
            <div className="icons science">
              <GiMaterialsScience />
            </div>
            <div className="side-menu scientific"> Scientific calculator</div>
          </Link>
          <Link onClick={()=>{setIsClicked(false)}} to="/hours">
            <div className="icons hours">
              <TbHours12 />
            </div>
            <div className="side-menu hours"> Hours calculator</div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Sidebar;
