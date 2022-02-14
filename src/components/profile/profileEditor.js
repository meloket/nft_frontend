import React, {useContext, useEffect} from "react";
import { Box } from "@material-ui/core";

import "../../assets/SCSS/components/profile/profileEditor.scss";

import Twitter from "../../assets/images/footer/twitter.png";
import Instagram from "../../assets/images/footer/instagram.png";
import Discord from "../../assets/images/footer/discord.png";
import Facebook from "../../assets/images/footer/facebook.png";
import Explorer from "../../assets/images/footer/explorer.png";
import Uploader from "../../assets/images/profile/uploader.png";
import Eye from "../../assets/images/profile/eye.png";

import { LayoutContext } from "../../Provider";


const ProfileEditor = () => {
    const { setTitle } = useContext(LayoutContext);
    const star = <span style={{ color: "#C437E6" }}>*</span>;
    useEffect(() => {
        setTitle("PROFILE");
    });
    

    return (
        <Box className={"profileEditor_container"} >
            {/* <Box className="Title">PROFILE</Box> */}
            <Box className="line"></Box>
            <Box className="mainBox">
                <Box className="inputBoxes">
                    <Box>SETTINGS</Box>
                    <Box fontSize={20} lineHeight={"22px"} padding={"8px 0px"}>{star}Required Fields</Box>
                    <Box paddingBottom={"10px"}>Username{star}</Box>
                    <Box className="inputBox">
                        <input />
                    </Box>
                    <Box className="inputLabel">Bio{star}</Box>
                    <Box className="inputBox" style={{ height: "194px" }}>
                        <textarea />
                    </Box>
                    <Box className="inputLabel">Email Address{star}</Box>
                    <Box className="inputBox">
                        <input />
                    </Box>
                    <Box className="inputLabel">Links</Box>
                    <Box className="inputBox sns">
                        <img src={Twitter} alt="Twitter" style={{ width: 43, height: 43 }} />
                        <input />
                    </Box>
                    <Box className="inputBox sns">
                        <img src={Instagram} alt="Instagram" style={{ width: 48, height: 48 }} />
                        <input />
                    </Box>
                    <Box className="inputBox sns">
                        <img src={Discord} alt="Discord" style={{ width: 45, height: 45 }} />
                        <input />
                    </Box>
                    <Box className="inputBox sns">
                        <img src={Facebook} alt="Facebook" style={{ width: 38, height: 38 }} />
                        <input />
                    </Box>
                    <Box className="inputBox sns">
                        <img src={Explorer} alt="Explorer" style={{ width: 39, height: 39 }} />
                        <input />
                    </Box>
                    <Box className="inputLabel">Wallet</Box>
                    <Box className="inputBox"><input /></Box>
                    <Box className="saveBtn">Save</Box>
                </Box>
                <Box className="fileBoxes">
                    <Box className="inputLabel" style={{ paddingTop: 70 }}>Profile Image</Box>
                    <Box className="imageUploader">
                        <img src={Uploader} alt="uploader" style={{ width: 70, height: 70 }} />
                    </Box>
                    <Box className="inputLabel">Profile Banner</Box>
                    <Box className="bannerUploader">
                        <img src={Uploader} alt="uploader" style={{ width: 70, height: 70 }} />
                    </Box>
                    <Box className="previewProfile">
                        <Box>Preview Profile</Box>
                        <img src={Eye} alt="Preview" style={{width: 37, height: 37}}/>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};


export default ProfileEditor;