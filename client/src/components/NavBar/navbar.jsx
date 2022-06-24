import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
// import { SidebarData } from "./SidebarData";
import FriendListBox from "./FriendListBox";
import { IconContext } from "react-icons/lib";
import * as FaIcons from "react-icons/fa";
import * as CgIcons from "react-icons/cg";
import * as BsIcons from "react-icons/bs";
import * as VscIcons from "react-icons/vsc";
import * as MdIcons from "react-icons/md"
import * as BiIcons from "react-icons/bi"
import * as AiIcons from "react-icons/ai"
import './navbar.css';
import './friendlist.css'

export default function NavBar() {
  const [sidebar, setSidebar] = useState(false);
  const [friendBox, setFriendBox] = useState(false);


  const showSidebar = () =>{ 
    if(sidebar === true){
        setFriendBox(false)
        setSidebar(!sidebar)
    }
    setSidebar(!sidebar)
};

  const showFriendBox = () => setFriendBox(!friendBox);


  const SidebarData = [
    {
      title: 'Profile',
      path: '#',
      icon: <CgIcons.CgProfile/>,
      className: 'nav-text',
      onClick: showSidebar
    },
    {
      title: 'Theme',
      path: '#',
      icon: <VscIcons.VscColorMode/>,
      className: 'nav-text',
      onClick: showSidebar
    },
    {
      title: 'Language',
      path: '#',
      icon: <BsIcons.BsTranslate/>,
      className: 'nav-text',
      onClick: showSidebar
    },
    {
      title: 'Friends',
      path: '#',
      icon: <FaIcons.FaUserFriends/>,
      className: 'friends-text',
      onClick: showFriendBox
    }
    ]
      

  return (
      <div>
          <IconContext.Provider value={{color: '#fff'}}>

                {/* Burger Menu */}
                <div className="navbar">

                    <div className="NavBar-left">
                        {/* Logo Henry Games clickeable para home */}
                        <Link to='/home'>
                            <img className='henrygames-logo' src='https://cdn.discordapp.com/attachments/960956320884883486/989525400512249947/genri_Logo.png' alt='nada' />
                        </Link>

                        {/* Store Section */}
                        <Link to='/store' className="left-sections">
                            <AiIcons.AiOutlineAppstoreAdd className="navbar-left-icons"/>
                            <h3 className="navleft-text">STORE</h3>
                        </Link>

                        {/* Library section */}
                        <Link to='/library' className="left-sections">
                            <BiIcons.BiLibrary className="navbar-left-icons" />
                            <h3 className="navleft-text">LIBRARY</h3>
                        </Link>
                    </div>
                

                    <div className="NavBar-center"></div>

                    <div className="NavBar-right">
                        {/* Chat clickable */}
                        <Link to="#">
                            <BiIcons.BiChat className="navbar-icons" />
                        </Link> 

                        {/* ShoppingCart clickable */}
                        <Link to="/my_cart">
                            <MdIcons.MdOutlineShoppingCart className="navbar-icons" />
                        </Link> 

                        {/* SideMenu Opener (three lines) */}
                        <Link to='#' >
                            <VscIcons.VscThreeBars className="navbar-icons" onClick={showSidebar}/>
                        </Link>
                    </div>
                    
                </div>
                

              {/* Menu vertical invisible de izquierda a derecha con su logica */}
                <nav className={sidebar ? 'side-menu active' : 'side-menu'}>
                    <ul className="side-menu-items">
                        <li className="sidebar-toggle" onClick={showSidebar}>
                            <Link to="#" className="navbar-icons">
                                <VscIcons.VscThreeBars />
                            </Link>
                        </li>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.className} >
                                    <Link to={item.path} onClick={item.onClick}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                              
                            )
                        })}
                        <nav className={friendBox ? 'friendBox active' : 'friendBox'}>
                            <FriendListBox/>
                        </nav>

                    </ul>
                </nav>
            </IconContext.Provider>            
        </div>
    )
}


