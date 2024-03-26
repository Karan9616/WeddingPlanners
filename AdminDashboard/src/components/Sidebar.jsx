import React from 'react';
import {BiHome,BiBookAlt,BiMessage,BiSolidReport,BiStats,BiTask,BiHelpCircle} from 'react-icons/bi';
import '../style/sidebar.css';
const Sidebar = () => {
  return (
    <div className="menu">
        <div className="logo">
            <BiBookAlt  className="logo-icon"/>
            <h2>Admin</h2>
        </div>
        <div className="menu--list">
            <a href="#" className="item">
                <BiHome className='icon'/>
                Dashboard
            </a>
        </div>
        <div className="menu--list">
            <a href="#" className="item">
                <BiTask className='icon'/>
                Assignment
            </a>
        </div>
        <div className="menu--list">
            <a href="#" className="item">
                <BiSolidReport className='icon'/>
                Report
            </a>
        </div>
        <div className="menu--list">
            <a href="#" className="item">
                <BiStats className='icon'/>
                Statistics
            </a>
        </div>
        <div className="menu--list">
            <a href="#" className="item">
                <BiMessage className='icon'/>
                Message
            </a>
        </div>
        <div className="menu--list">
            <a href="#" className="item">
                <BiHelpCircle className='icon'/>
                Help
            </a>
        </div>

    </div>
  )
}

export default Sidebar;