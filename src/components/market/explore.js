import React, {useContext} from "react";
import { Box } from "@material-ui/core";

import { LayoutContext } from "../../Provider";

import one from "../../assets/images/market/explore/1.png";
import two from "../../assets/images/market/explore/2.png";
import three from "../../assets/images/market/explore/3.png";
import four from "../../assets/images/market/explore/4.png";
import five from "../../assets/images/market/explore/5.png";
import six from "../../assets/images/market/explore/6.png";
import seven from "../../assets/images/market/explore/7.png";
import eight from "../../assets/images/market/explore/8.png";
import nine from "../../assets/images/market/explore/9.png";
import ten from "../../assets/images/market/explore/10.png";
import eleven from "../../assets/images/market/explore/11.png";
import twelve from "../../assets/images/market/explore/12.png";
import thirteen from "../../assets/images/market/explore/13.png";
import forteen from "../../assets/images/market/explore/14.png";
import fifteen from "../../assets/images/market/explore/15.png";

import "../../assets/SCSS/components/market/explore.scss";
import ExploreCard from "../general/exploreCard";



const Explore = () => {
    const { setTitle } = useContext(LayoutContext);
    setTitle("EXPLORE");

    return (
        <Box className="explore">
            <ExploreCard imgSrc={one} title={"TRIBUTE to Blue"} content={"Digital Art Collection"}/>
            <ExploreCard imgSrc={two} title={"The Red Tribute"} content={"Digital 3D Art Collection"}/>
            <ExploreCard imgSrc={three} title={"EGC - NINJAs"} content={"Metaverse Collectin"}/>
            <ExploreCard imgSrc={four} title={"TRIBUTE to Blue"} content={"Digital Art Collection"}/>
            <ExploreCard imgSrc={five} title={"The Red Tribute"} content={"Digital 3D Art Collection"}/>
            <ExploreCard imgSrc={six} title={"EGC - NINJAs"} content={"Metaverse Collectin"}/>
            <ExploreCard imgSrc={seven} title={"TRIBUTE to Blue"} content={"Digital Art Collection"}/>
            <ExploreCard imgSrc={eight} title={"The Red Tribute"} content={"Digital 3D Art Collection"}/>
            <ExploreCard imgSrc={nine} title={"EGC - NINJAs"} content={"Metaverse Collectin"}/>
            <ExploreCard imgSrc={ten} title={"TRIBUTE to Blue"} content={"Digital Art Collection"}/>
            <ExploreCard imgSrc={eleven} title={"The Red Tribute"} content={"Digital 3D Art Collection"}/>
            <ExploreCard imgSrc={twelve} title={"EGC - NINJAs"} content={"Metaverse Collectin"}/>
            <ExploreCard imgSrc={thirteen} title={"TRIBUTE to Blue"} content={"Digital Art Collection"}/>
            <ExploreCard imgSrc={forteen} title={"The Red Tribute"} content={"Digital 3D Art Collection"}/>
            <ExploreCard imgSrc={fifteen} title={"EGC - NINJAs"} content={"Metaverse Collectin"}/>
        </Box>
    );
};


export default Explore;