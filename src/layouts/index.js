import React from "react";
import PropTypes from "prop-types";
import { Box } from "@material-ui/core";

import "../assets/SCSS/layouts/layouts.scss"

import Navbar from "./navbar";

const Layout = ({ children }) => {

    return (
        <Box className={"layouts_container"}>
            <Navbar />
            <Box width={"100%"} zIndex={0}>{children}</Box>

        </Box>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;