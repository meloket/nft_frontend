import React from "react";
import { Box } from "@material-ui/core";

import "../assets/SCSS/pages/profile.scss"

import Footer from "../components/landing/footer";
import Sidebar from "../components/profile/sidebar";
import ProfileEditor from "../components/profile/profileEditor";


const Profile = () => {

    return (
        <Box className={"profile_container"} >
            <Box className="profile_content">
                <Sidebar/>
                <ProfileEditor/>
            </Box>
            <Footer/>
        </Box>
    );
};


export default Profile;