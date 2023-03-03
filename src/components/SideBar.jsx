import React, { useState } from "react";
import { BsEnvelope, 
    BsGear,
    BsGraphUp,
    BsBoxSeam,
    BsTags,
    BsWallet,
    BsStar,
    BsBoxArrowInLeft,
    BsBoxArrowInRight
} from "react-icons/bs";
import "../components/stylesheets/SideBar.css";

function Sidebar() {
  const [collapsed, setCollapsed] = useState(true);

  const handleToggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      
      <div className="sidebar-menu">
        <ul>
          <li>
            <a href="#">
              <BsBoxSeam className="sidebar-icon" />
              {!collapsed && <span className="sidebar-text">You Product</span>}
            </a>
          </li>
          <li>
            <a href="#">
              <BsEnvelope className="sidebar-icon" />
              {!collapsed && <span className="sidebar-text">Mail</span>}
            </a>
          </li>
          <li>
            <a href="#">
              <BsGraphUp className="sidebar-icon" />
              {!collapsed && <span className="sidebar-text">Stadistics</span>}
            </a>
          </li>
          <li>
            <a href="#">
              <BsTags className="sidebar-icon" />
              {!collapsed && <span className="sidebar-text">Sold</span>}
            </a>
          </li>
          <li>
            <a href="#">
              <BsStar className="sidebar-icon" />
              {!collapsed && <span className="sidebar-text">Favorites</span>}
            </a>
          </li>
          <li>
            <a href="#">
              <BsWallet className="sidebar-icon" />
              {!collapsed && <span className="sidebar-text">Wallet</span>}
            </a>
          </li>
          <li>
            <a href="#">
              <BsGear className="sidebar-icon" />
              {!collapsed && <span className="sidebar-text">Settings</span>}
            </a>
          </li>
        </ul>
      </div>
      <div className="sidebar-collapse">
        {collapsed ? (
          <BsBoxArrowInRight
            className="sidebar-toggle"
            onClick={handleToggleSidebar}
          />
        ) : (
          <BsBoxArrowInLeft
            className="sidebar-toggle"
            onClick={handleToggleSidebar}
          />
        )}
      </div>
    </div>
  );
}

export default Sidebar;