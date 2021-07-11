import React from "react";
import { useSelector } from "react-redux";

import { DeliveryForm, Categories } from "..";

import menu from "../../assets/svg/BurgerMenu.svg";
import basket from "../../assets/svg/Basket.svg";

import "./header.scss";

const Header = ({
    onSelfDelivery,
    onDelivery,
    categories,
    sticky,
    headerRef,
    onSendCart,
    setTooltipVisible,
    tooltipVisible,
    setBuilding,
    building,
    setStreet,
    street,
    openTab,
    active,
}) => {
    const delivery = useSelector((state) => state.delivery.delivery);
    const total = useSelector((state) => state.delivery.total);
    return (
        <div className="header">
            <div className="header__top">
                <div className="header__top-rectangle"></div>
                <div className="header__top-rectangle"></div>
                <div className="header__top-rectangle"></div>
            </div>
            <div className="header__top-menu">
                <div className="header__top-menu-icon">
                    <img src={menu} alt="menu" />
                </div>
                <div className="header__top-menu-basket" onClick={onSendCart}>
                    <p>{total} &#8381;</p>
                    <img src={basket} alt="basket" />
                </div>
            </div>
            <div className="header__delivery">
                <h2>Доставка г. Москва</h2>
                <div className="header__delivery-buttons">
                    <button
                        className={
                            delivery
                                ? "header__delivery-buttons-btn active"
                                : "header__delivery-buttons-btn"
                        }
                        onClick={onDelivery}>
                        Доставка
                    </button>
                    <button
                        className={
                            !delivery
                                ? "header__delivery-buttons-btn active"
                                : "header__delivery-buttons-btn"
                        }
                        onClick={() => {onSelfDelivery(); setTooltipVisible(false);}}>
                        Самовывоз
                    </button>
                </div>
            </div>
            <div style={{ marginBottom: 50 }}>
                {delivery && (
                    <DeliveryForm
                        onSendCart={onSendCart}
                        setTooltipVisible={setTooltipVisible}
                        tooltipVisible={tooltipVisible}
                        setBuilding={setBuilding}
                        building={building}
                        setStreet={setStreet}
                        street={street}
                    />
                )}
            </div>
            <Categories
                categories={categories}
                sticky={sticky}
                headerRef={headerRef}
                openTab={openTab}
                active={active}
            />
        </div>
    );
};

export default Header;
