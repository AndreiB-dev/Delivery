import React from "react";

import { Section, Social } from "..";

import "./footer.scss";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__top">
                <div className="footer__top-rectangle"></div>
                <div className="footer__top-rectangle"></div>
                <div className="footer__top-rectangle"></div>
            </div>
            <div className="footer__sections" >
                <Section />
                <Section />
                <div className="footer__sections-circle" ></div>
                <Section />
                <Section />
            </div>
            <Social />
        </div>
    );
};

export default Footer;
