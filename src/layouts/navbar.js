import React, { useContext, useState } from "react";
import { Box } from "@material-ui/core";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { ImMenu } from "react-icons/im";

import "../assets/SCSS/layouts/navbar.scss"
import nftLogo from "../assets/images/navbar/nftLogo.png";
import egcLogo from "../assets/images/navbar/egcLogo.png";
import cratorLogo from "../assets/images/navbar/cratorLogo.png";
import walletIcon from "../assets/images/navbar/walletIcon.png";
import walletIconBlack from "../assets/images/navbar/walletIconBlack.png";
import notification from "../assets/images/navbar/notification.png";
import userIcon from "../assets/images/navbar/userIcon.png";
import chatIcon from "../assets/images/navbar/chatIcon.png";
import { LayoutContext } from "../Provider";


const Navbar = () => {
    const { title } = useContext(LayoutContext);
    const [rerender, setRerender] = useState(0);
    const [menuItemsFlag, setMenuItemsFlag] = useState(false);
    const activeItem = window.localStorage.getItem("activeItem");
    const setActiveItem = (val) => {
        window.localStorage.setItem("activeItem", val);
        setRerender(rerender + 1);
    }

    return (
        <>
            <Box className={"nav_container"}>
                <Box className="navItems">
                    <Box className="navItemContainer">
                        <Box flex={1} onClick={() => setActiveItem("1")}>
                            <Link to={'/market'}>
                                <Box className={activeItem === "1" ? "active navItem" : "navItem"}>
                                    <Box className="itemImg"></Box>
                                    <Box className="itemText">Market</Box>
                                </Box>
                            </Link>
                        </Box>
                        <Box flex={1} onClick={() => setActiveItem("2")}>
                            <Link to={'/game'}>
                                <Box className={activeItem === "2" ? "active navItem" : "navItem"}>
                                    <img src={egcLogo} style={{ width: "49.5px" }} className="itemImg" alt="EGC Logo" />
                                    <Box className="itemText">Games</Box>
                                </Box>
                            </Link>
                        </Box>
                        <Box flex={1} onClick={() => setActiveItem("3")}>
                            <Link to={'/crator'}>
                                <Box className={activeItem === "3" ? "active navItem" : "navItem"}>
                                    <img src={cratorLogo} style={{ width: "41.66px" }} className="itemImg" alt="Crator Logo" />
                                    <Box className="itemText">Crator</Box>
                                </Box>
                            </Link>
                        </Box>
                        <Box flex={1} className={activeItem === "4" ? "active navItem" : "navItem"} onClick={() => setActiveItem("4")}>
                            <Box className="itemImg"></Box>
                            <Box className="itemText">Lending</Box>
                        </Box>
                        <Box flex={1} className={activeItem === "5" ? "active navItem" : "navItem"} onClick={() => setActiveItem("5")}>
                            <Box className="itemImg"></Box>
                            <Box className="itemText">Rewards</Box>
                        </Box>
                        <Box flex={1} onClick={() => setActiveItem("6")}>
                            <Link to={'/create'}>
                                <Box className={activeItem === "6" ? "active navItem" : "navItem"}>
                                    <Box className="itemImg"></Box>
                                    <Box className="itemText">Create</Box>
                                </Box>
                            </Link>
                        </Box>
                    </Box>
                </Box>
                <Box className="searchBox">
                    <Box className="searchContainer">
                        <Box className="searchIcon"><AiOutlineSearch /></Box>
                        <input className="searchInput" />
                    </Box>
                </Box>
                <Box className="walletBox">
                    <img src={walletIcon} alt="Wallet" className="white wallet" />
                    <img src={walletIconBlack} alt="Wallet" className="black wallet" />
                </Box>
                <Box className="menuBtn">
                    <ImMenu onClick={() => setMenuItemsFlag(!menuItemsFlag)} />
                    <Box className="menuItems" maxHeight={menuItemsFlag ? 500 : 0} display={menuItemsFlag ? "flex" : "none"} padding={menuItemsFlag ? "10px 0px" : 0}>
                        <Link to={'/'}>
                            <Box className={activeItem === "0" ? "active item" : "item"} onClick={() => { setActiveItem("0"); setMenuItemsFlag(!menuItemsFlag) }}>Home</Box>
                        </Link>
                        <Link to={'/market'}>
                            <Box className={activeItem === "1" ? "active item" : "item"} onClick={() => { setActiveItem("1"); setMenuItemsFlag(!menuItemsFlag) }}>Market</Box>
                        </Link>
                        <Link to={'/game'}>
                            <Box className={activeItem === "2" ? "active item" : "item"} onClick={() => { setActiveItem("2"); setMenuItemsFlag(!menuItemsFlag) }}>Games</Box>
                        </Link>
                        <Link to={'/crator'}>
                            <Box className={activeItem === "3" ? "active item" : "item"} onClick={() => { setActiveItem("3"); setMenuItemsFlag(!menuItemsFlag) }}>Crator</Box>
                        </Link>
                        <Link to={'/lending'}>
                            <Box className={activeItem === "4" ? "active item" : "item"} onClick={() => { setActiveItem("4"); setMenuItemsFlag(!menuItemsFlag) }}>Lending</Box>
                        </Link>
                        <Link to={'/rewards'}>
                            <Box className={activeItem === "5" ? "active item" : "item"} onClick={() => { setActiveItem("5"); setMenuItemsFlag(!menuItemsFlag) }}>Rewards</Box>
                        </Link>
                        <Link to={'/create'}>
                            <Box className={activeItem === "6" ? "active item" : "item"} onClick={() => { setActiveItem("6"); setMenuItemsFlag(!menuItemsFlag) }}>Create</Box>
                        </Link>
                    </Box>
                </Box>
            </Box>
            <Box className="navFunction">
                <Box display="flex">
                    <Link to={'/'}>
                        <Box className={activeItem === "0" || activeItem === undefined || activeItem === null ? "active homeBtn" : "homeBtn"} onClick={() => setActiveItem("0")}>
                            <img src={nftLogo} className="nftLogo" alt="nftLogo" />
                        </Box>
                    </Link>
                    <Box className="navTitle">{title}</Box>
                </Box>
                <Box className="functionItems">
                    <img src={notification} alt="notification" className="notification" />
                    <Link to={'/profile'}>
                        <img src={userIcon} alt="userIcon" className="userIcon" />
                    </Link>
                    <img src={chatIcon} alt="chatIcon" className="chatIcon" />
                </Box>
            </Box>
        </>
    );
};


export default Navbar;