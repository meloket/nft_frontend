import React, { useContext, useRef, useState } from "react";
import { Box } from "@material-ui/core";

import "../assets/SCSS/pages/create.scss"

import { LayoutContext } from "../Provider";

import UploadImage from "../assets/images/create/upload.png";
import Properties from "../assets/images/create/properties.png";
import Unlock from "../assets/images/create/unlock.png";
import ThreeBars from "../assets/images/crator/threeBars.png";
import Cross from "../assets/images/crator/cross.png";
import Warning from "../assets/images/crator/warning.png";
import EtherLogo from "../assets/images/crator/etherLogo.png";
import DownArrow from "../assets/images/crator/downArrow.png";


const Create = () => {
    const { setTitle } = useContext(LayoutContext);
    setTitle("CREATE");

    const [unlockSwitch, setUnlockSwitch] = useState(false);
    const [switchVal, setSwitchVal] = useState(false);

    const fileInput = useRef();
    const star = <span style={{ color: "#C437E6" }}>*</span>;

    const handleUpload = (event) => {
        const fileUploaded = event.target.files[0];
        return fileUploaded;
    }

    return (
        <Box className={"create_container"} >
            <Box flexGrow={538}></Box>
            <Box className="inputContainer">
                <Box>CREATE NEW NFT</Box>
                <Box className="smallTitle" marginTop={1
                }>{star}Required fields</Box>
                <Box marginTop={3}>Image, Video, Audio, or 3D Model{star}<span className="smallTitle" style={{color: "#C437E6", fontWeight: "bold"}}>Max size: X MB </span></Box>
                <Box className="fileBox" onClick={() => fileInput.current.click()} marginTop={1}>
                    <img src={UploadImage} style={{width: "117px", height: "117px"}} alt="upload"/>
                </Box>
                <input type={"file"} ref={fileInput} style={{display: "none"}} onChange={() => handleUpload()}/>
                <Box marginTop={3}>Item name{star}</Box>
                <Box className="inputBox" marginTop={1}>
                    <input />
                </Box>
                <Box marginTop={3}>External link</Box>
                <Box className="smallTitle">EGC will included a link you can share and promote your NFT. You can link your own webpage.</Box>
                <Box className="inputBox" marginTop={1}>
                    <input />
                </Box>
                <Box marginTop={3}>Description</Box>
                <Box className="smallTitle">This will be included on your item's detail.</Box>
                <Box className="inputBox"  style={{height: 160}} marginTop={1}>
                    <textarea/>
                </Box>
                <Box className="dataBox" marginTop={"30px"}>
                    <Box>
                        <img src={ThreeBars} alt="three bars" style={{width: 32, height: 32, paddingRight: 10, paddingBottom: 10}}/>
                        <Box>
                            <Box>Select one or more categories{star}</Box>
                            <Box className="smallTitle">Art,Collectible, Domain, Music, etc.</Box>
                        </Box>
                    </Box>
                    <Box className="crossBox">
                        <img src={Cross} alt="cross" style={{width:37, height: 37, padding: 8}}/>
                    </Box>
                </Box>
                <Box className="dataBox" marginTop={"30px"}>
                    <Box>
                        <img src={Properties} alt="properties" style={{width: 32, height: 32, paddingRight: 10, paddingBottom: 10}}/>
                        <Box>
                            <Box>Properties</Box>
                            <Box className="smallTitle">Textual traits will show up as rectangles.</Box>
                        </Box>
                    </Box>
                    <Box className="crossBox">
                        <img src={Cross} alt="cross" style={{width:37, height: 37, padding: 8}}/>
                    </Box>
                </Box>
                <Box className="dataBox" marginTop={"30px"}>
                    <Box>
                        <img src={Unlock} alt="unlock" style={{width: 32, height: 32, paddingRight: 10, paddingBottom: 10}}/>
                        <Box>
                            <Box>Unlockable Content</Box>
                            <Box className="smallTitle">Content that only be seen by the owner.</Box>
                        </Box>
                    </Box>
                    <Box className="switchBox" onClick={() => {setUnlockSwitch(!unlockSwitch)}}>
                        <Box style={!unlockSwitch ? {left: 3} : {left: 27}}></Box>
                    </Box>
                </Box>
                <Box className="dataBox" marginTop={"30px"}>
                    <Box>
                        <img src={Warning} alt="warning" style={{width: 32, height: 32, paddingRight: 10, paddingBottom: 10}}/>
                        <Box>
                            <Box>Explicit {`&`} Sensitive Content</Box>
                            <Box className="smallTitle">Set as explicit and sensitive content.</Box>
                        </Box>
                    </Box>
                    <Box className="switchBox" onClick={() => {setSwitchVal(!switchVal)}}>
                        <Box style={!switchVal ? {left: 3} : {left: 27}}></Box>
                    </Box>
                </Box>
                <Box marginTop={3}>Supply</Box>
                <Box className="smallTitle">Number of copies to be minted.</Box>
                <Box className="inputBox box360" marginTop={1}>
                    <input />
                </Box>
                <Box marginTop={3}>Chain</Box>
                <Box className="inputBox box360" marginTop={1}>
                    <Box display={'flex'} flexGrow={1} alignItems={'center'}>
                        <img src={EtherLogo} alt="ether logo" style={{width: 24, height: 39, padding: "8px 16px"}}/>
                        Ethereum
                    </Box>
                    <img src={DownArrow} alt="Down Arrow" style={{width: 23, height: 30, padding: "12px"}}/>
                </Box>
                <Box className="mintBtn" marginTop={"50px"}>MINT</Box>
            </Box>
            <Box flexGrow={574}></Box>
        </Box>
    );
};


export default Create;