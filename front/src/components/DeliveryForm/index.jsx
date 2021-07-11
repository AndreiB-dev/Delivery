import React from "react";

import "./deliveryForm.scss";

const DeliveryForm = ({
    setTooltipVisible,
    tooltipVisible,
    setBuilding,
    building,
    setStreet,
    street,
}) => {
    return (
        <div className="delivery-form">
            <div className="delivery-form__block">
            <p>Улица</p>
            
                <input
                    className="delivery-form__input"
                    value={street}
                    onChange={(e) => {setStreet(e.target.value); setTooltipVisible(false);}}
                />

            </div>
            <div className="delivery-form__block">

                <p>Дом</p>
            <span
                {...(tooltipVisible && {
                    tooltip: "Нужно заполнить для оформления доставки",
                })}>
            <input
                className="delivery-form__input"
                value={building}
                onChange={(e) => {setBuilding(e.target.value); setTooltipVisible(false);}}
            />
            </span>
            </div>
        </div>
    );
};

export default DeliveryForm;
