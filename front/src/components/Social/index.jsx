import React from "react";

import vk from "../../assets/svg/vk.svg";
import fb from "../../assets/svg/fb.svg";
import tw from "../../assets/svg/tw.svg";
import ok from "../../assets/svg/ok.svg";
import GPlay from "../../assets/svg/GooglePlay.svg";
import AppStore from "../../assets/svg/AppStore.svg";

import "./social.scss";

const Social = () => {
    return (
        <div className="social-block">
            <div className="social-block__hiden" />
            <div className="social-block__media">
                <img src={vk} alt="vk" />
                <img src={fb} alt="fb" />
                <img src={tw} alt="tw" />
                <img src={ok} alt="ok" />
            </div>
            <div className="social-block__stores">
                <img src={GPlay} alt="GPlay" />
                <img src={AppStore} alt="AppStore" />
            </div>

        </div>
    );
};

export default Social;
