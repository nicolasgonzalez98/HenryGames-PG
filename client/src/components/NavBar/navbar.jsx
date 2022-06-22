import React from "react";
import { useState } from "react";
import * as VscIcons from "react-icons/vsc";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import './navbar.css';
import { IconContext } from "react-icons/lib";
import * as MdIcons from "react-icons/md"


export default function NavBar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar)

    return (
        <div>
            <IconContext.Provider value={{color: '#fff'}}>

                {/* Burger Menu */}
                <div className="navbar"> 

                    {/* ShoppingCart clickable */}
                    <Link to="/my_cart">
                      <MdIcons.MdOutlineShoppingCart className="navbar-icons" />
                    </Link> 

                  {/* SideMenu Opener (three lines) */}
                  <Link to='#' >
                      <VscIcons.VscThreeBars className="navbar-icons" onClick={showSidebar}/>
                  </Link>
                </div>

                {/* Menu vertical invisible de izquierda a derecha con su logica */}
                <nav className={sidebar ? 'side-menu active' : 'side-menu'}>
                    <ul className="side-menu-items" onClick={showSidebar}>
                        <li className="sidebar-toggle">
                            <Link to="#" className="navbar-icons">
                                <VscIcons.VscThreeBars />
                            </Link>
                        </li>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.className}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>

            </IconContext.Provider>            
        </div>
    )
}


// export default function Header() {
//   return (
//     <div>
//       <Link to='/home'>
//         <img src='' alt='' />
//       </Link>
//       <Link to='/log_in'>
//         <button>Log In</button>
//       </Link>
//       <Link to='/sign_up'>
//         <button>Sign Up</button>
//       </Link>
//       <Link to='/profile'>
//         <img src='' alt='' />
//       </Link>
//     </div>
//   )
// }
