import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { deliveryActions } from "../redux/actions";

import { Products as BaseProducts } from "../components";

const Products = () => {
    const dispatch = useDispatch();
    const categories = useSelector(state => state.delivery.products);
    const cart = useSelector((state) => state.delivery.cart);

    const [manualEffect, setManualEffect] = React.useState(false);
    
    
    const onAdd = (id) => {
        dispatch(deliveryActions.addToCart(id));
    };
    
    const onPlus = (id) => {
        dispatch(deliveryActions.addQuantity(id));
        setManualEffect(!manualEffect);
    };
    
    const onMinus = (id) => {
        dispatch(deliveryActions.subQuantity(id));
        setManualEffect(!manualEffect);
    };


    React.useEffect(() => {
        dispatch(deliveryActions.fetchProducts());
    }, [dispatch]);

    return (
        <BaseProducts
            categories={categories}
            onAdd={onAdd}
            onPlus={onPlus}
            onMinus={onMinus}
            cart={cart}
            manualEffect={manualEffect}
        />
    );
};

export default Products;