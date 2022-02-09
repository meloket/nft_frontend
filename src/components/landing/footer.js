import React from "react";
import { Box } from "@material-ui/core";

import "../../assets/SCSS/components/landing/footer.scss";

import SNS from "../../assets/images/footer/sns.png";
import Discord from "../../assets/images/footer/discord.png";
import Telegram from "../../assets/images/footer/telegram.png";
import Instagram from "../../assets/images/footer/instagram.png";
import Twitter from "../../assets/images/footer/twitter.png";
import Facebook from "../../assets/images/footer/facebook.png";
import Reddit from "../../assets/images/footer/reddit.png";


const Footer = () => {

    return (
        <Box className={"footer_container"}>
            <Box className="footer_content">
                <Box className="join_container">
                    <Box className="signup_container">
                        <Box className="forgetFomo">Forget FOMO</Box>
                        <Box className="signupContext">Join our mailing list to match EGC frequency; Whats new, Feature releases, NFT drops, tips, tricks and more.</Box>
                        <Box className="signupLine">
                            <Box className="signupInputBox">
                                <input className="signupInput" placeholder="Your email address"/>
                            </Box>
                            <Box className="signupBtn">Sign up</Box>
                        </Box>
                    </Box>
                    <Box className="joinFamily">
                        <Box className="joinContext">Join Family and Frens</Box>
                        <Box className="joinIcons">
                            <img src={SNS}  style={{width: 65, height: 65}} alt="Sns Icon"/>
                            <img src={Telegram}  style={{width: 48, height: 47}} alt="Sns Icon"/>
                            <img src={Discord}  style={{width: 46, height: 47}} alt="Sns Icon"/>
                            <img src={Instagram}  style={{width: 48, height: 48}} alt="Sns Icon"/>
                            <img src={Twitter}  style={{width: 43, height: 42}} alt="Sns Icon"/>
                            <img src={Facebook}  style={{width: 38, height: 37}} alt="Sns Icon"/>
                            <img src={Reddit}  style={{width: 52, height: 52}} alt="Sns Icon"/>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Footer;