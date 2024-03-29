import React, { useContext, useState } from "react";
import { Box } from "@material-ui/core";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";

import "../assets/SCSS/layouts/navbar.scss"
import nftLogo from "../assets/images/navbar/nftLogo.png";
import egcLogo from "../assets/images/navbar/egcLogo.png";
import cratorLogo from "../assets/images/navbar/cratorLogo.png";
import walletIcon from "../assets/images/navbar/walletIcon.png";
import notification from "../assets/images/navbar/notification.png";
import userIcon from "../assets/images/navbar/userIcon.png";
import chatIcon from "../assets/images/navbar/chatIcon.png";
import { LayoutContext } from "../Provider";


const Navbar = () => {
    const { title } = useContext(LayoutContext);
    const [rerender, setRerender] = useState(0);
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
                        <Box flex={1} className={activeItem === "1" ? "active navItem" : "navItem"} onClick={() => setActiveItem("1")}>
                            <Box className="itemImg"></Box>
                            <Box className="itemText">Market</Box>
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
                        <Box flex={1} className={activeItem === "6" ? "active navItem" : "navItem"} onClick={() => setActiveItem("6")}>
                            <Box className="itemImg"></Box>
                            <Box className="itemText">Create</Box>
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
                    <img src={walletIcon} alt="Wallet" style={{ width: 58, height: 45 }} />
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