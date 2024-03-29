import React, { useContext, useEffect } from "react";
import { Box } from "@material-ui/core";

import "../assets/SCSS/pages/landing.scss"

import one from "../assets/images/landing/carousel/one.png";
import two from "../assets/images/landing/carousel/two.png";
import three from "../assets/images/landing/carousel/three.png";
import four from "../assets/images/landing/carousel/four.png";
import five from "../assets/images/landing/carousel/five.png";
import six from "../assets/images/landing/carousel/six.png";
import Carousel from "../components/carousel";
import Footer from "../components/landing/footer";
import { LayoutContext } from "../Provider";


const Landing = () => {
    const { setTitle } = useContext(LayoutContext);
    const imgList = [one, two, three, four, five, six];
    const nameList = ["Drops", "Wearables", "Sellers", "Lends", "Creators", "Auctions"];
    const controllerNames = ["Upcoming Drops", "Top Wearables", "Top Sellers", "Top Lends", "Top Creators", "Upcoming Auctions"];

    useEffect(() => {
        setTitle("");
    })

    return (
        <Box className={"landing_container"} >
            <Carousel imgList={imgList} nameList={nameList} naviNames={controllerNames} />
            <Footer/>
        </Box>
    );
};


export default Landing;