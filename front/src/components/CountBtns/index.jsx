import React from "react";

import plus from "../../assets/svg/WhitePlus.svg";
import minus from "../../assets/svg/Minus.svg";

import "./countBtns.scss";

const CountBtns = ({ id, onPlus, onMinus, count }) => {
    return (
        <div className="btn-block">
            <div className="btn-block__btn" onClick={() => onMinus(id)}>
                <img src={minus} alt="minus" />
            </div>
            <p>{count}</p>
            <div className="btn-block__btn" onClick={() =>{ onPlus(id)}}>
                <img src={plus} alt="plus" />
            </div>
        </div>
    );
};

export default CountBtns;
