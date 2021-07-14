import React from "react";

import { CountBtns } from "..";

import plus from "../../assets/svg/plus.svg";

import "./productCard.scss";

const ProductCard = ({
    id,
    name,
    price,
    img,
    status,
    onAdd,
    onPlus,
    onMinus,
    cart,
    manualEffect,
    categoryId,
}) => {
    const [count, setCount] = React.useState(0);
    React.useEffect(() => {
        let inCart = cart.find((item) => item.id === id);
        if (inCart) {
            setCount(inCart.quantity);
        } else {
            setCount(0);
        }
    }, [cart, manualEffect, id]);

    return (
        <div className={`product-card ${count && (categoryId % 2 !== 0 ?  "product-card--active" : "product-card--active-even")}`} >
            <div className="product-card__picture">
                {status ? (
                    status === "new" ? (
                        <div className="product-card__picture-new">Новое</div>
                    ) : (
                        <div className="product-card__picture-hit">Хит</div>
                    )
                ) : (
                    <div
                        className="product-card__picture-new"
                        style={{ opacity: 0 }}></div>
                )}
                {!count ? (
                    <div style={{ width: 104 }}>
                        <div
                            className="product-card__picture-add"
                            onClick={() => onAdd(id)}>
                            <img src={plus} alt="plus" />
                        </div>
                    </div>
                ) : (
                    <CountBtns
                        id={id}
                        onPlus={onPlus}
                        onMinus={onMinus}
                        count={count}
                    />
                )}
                <img
                    className="product-card__picture-image"
                    src={img}
                    alt={name}
                />
            </div>
            <div className="product-card__name">
                <p>{name}</p>
            </div>
            <div className="product-card__price">
                <p>{price} &#8381;</p>
            </div>
        </div>
    );
};

export default ProductCard;
