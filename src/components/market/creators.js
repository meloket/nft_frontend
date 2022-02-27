import React, {useContext} from "react";
import { Box } from "@material-ui/core";

import { LayoutContext } from "../../Provider";

import one from "../../assets/images/market/creators/1.png";
import two from "../../assets/images/market/creators/2.png";
import three from "../../assets/images/market/creators/3.png";
import four from "../../assets/images/market/creators/4.png";
import five from "../../assets/images/market/creators/5.png";
import six from "../../assets/images/market/creators/6.png";
import seven from "../../assets/images/market/creators/7.png";
import eight from "../../assets/images/market/creators/8.png";
import nine from "../../assets/images/market/creators/9.png";
import ten from "../../assets/images/market/creators/10.png";
import eleven from "../../assets/images/market/creators/11.png";
import twelve from "../../assets/images/market/creators/12.png";
import Art from "../../assets/images/market/sidebar/art.png";
import Metaverse from "../../assets/images/market/sidebar/metaverse.png";
import EtherLogo from "../../assets/images/coinLogos/etherLogo.png";
import EgcLogo from "../../assets/images/coinLogos/egcLogo.png";

import "../../assets/SCSS/components/market/creators.scss";
import MarketCard from "../general/marketCard";



const Creators = () => {
    const { setTitle } = useContext(LayoutContext);
    setTitle("CREATORS");

    return (
        <Box className="creators">
            <MarketCard imgSrc={one} title={"TRIBUTE to Blue"} content={"Digital Art Collection"} context={<>Different perspective,<br/>a whole new world.</>} categoryImg={Art} coinLogo={EtherLogo} price={0.1}/>
            <MarketCard imgSrc={two} title={"The Red Tribute"} content={"Digital 3D Art Collection"} context={<>EGC Ecosystem can guide you<br/>to a successful and peaceful economy life.</>} categoryImg={Art} coinLogo={EtherLogo} price={0.1}/>
            <MarketCard imgSrc={three} title={"EGC - NINJAs"} content={"Metaverse Collectin"} context={<>RED King Ultra-rare and Powerful.</>} categoryImg={Metaverse} coinLogo={EgcLogo} price={10000000}/>
            <MarketCard imgSrc={four} title={"TRIBUTE to Blue"} content={"Digital Art Collection"} context={<>Different perspective,<br/>a whole new world.</>} categoryImg={Art} coinLogo={EtherLogo} price={0.1}/>
            <MarketCard imgSrc={five} title={"The Red Tribute"} content={"Digital 3D Art Collection"} context={<>EGC Ecosystem can guide you<br/>to a successful and peaceful economy life.</>} categoryImg={Art} coinLogo={EtherLogo} price={0.1}/>
            <MarketCard imgSrc={six} title={"EGC - NINJAs"} content={"Metaverse Collectin"} context={<>RED King Ultra-rare and Powerful.</>} categoryImg={Metaverse} coinLogo={EgcLogo} price={10000000}/>
            <MarketCard imgSrc={seven} title={"TRIBUTE to Blue"} content={"Digital Art Collection"} context={<>Different perspective,<br/>a whole new world.</>} categoryImg={Metaverse} coinLogo={EtherLogo} price={0.1}/>
            <MarketCard imgSrc={eight} title={"The Red Tribute"} content={"Digital 3D Art Collection"} context={<>EGC Ecosystem can guide you<br/>to a successful and peaceful economy life.</>} categoryImg={Art} coinLogo={EgcLogo} price={25000000}/>
            <MarketCard imgSrc={nine} title={"EGC - NINJAs"} content={"Metaverse Collectin"} context={<>RED King Ultra-rare and Powerful.</>} categoryImg={Art} coinLogo={EtherLogo} price={1.5}/>
            <MarketCard imgSrc={ten} title={"TRIBUTE to Blue"} content={"Digital Art Collection"} context={<>Different perspective,<br/>a whole new world.</>} categoryImg={Metaverse} coinLogo={EtherLogo} price={0.1}/>
            <MarketCard imgSrc={eleven} title={"The Red Tribute"} content={"Digital 3D Art Collection"} context={<>EGC Ecosystem can guide you<br/>to a successful and peaceful economy life.</>} categoryImg={Art} coinLogo={EgcLogo} price={25000000}/>
            <MarketCard imgSrc={twelve} title={"EGC - NINJAs"} content={"Metaverse Collectin"} context={<>RED King Ultra-rare and Powerful.</>} categoryImg={Art} coinLogo={EtherLogo} price={1.5}/>
        </Box>
    );
};


export default Creators;