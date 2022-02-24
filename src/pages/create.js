import React, { useContext } from "react";
import { Box } from "@material-ui/core";

import "../assets/SCSS/pages/create.scss"

import { LayoutContext } from "../Provider";


const Create = () => {
    const { setTitle } = useContext(LayoutContext);
    setTitle("CREATE");
    const star = <span style={{ color: "#C437E6" }}>*</span>;

    return (
        <Box className={"create_container"} >
            <Box flexGrow={538}></Box>
            <Box className="inputContainer">
                here is create page.
                <Box style={{borderBottom: "1px solid black", width: "100%"}}></Box>
                {star}
            </Box>
            <Box flexGrow={574}></Box>
        </Box>
    );
};


export default Create;