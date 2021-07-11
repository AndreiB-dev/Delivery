import { deliveryApi } from "../../api";

const actions = {
    setProducts: (items) => ({
        type: "SET_PRODUCTS_BY_CATEGORY",
        payload: items,
    }),

    setItems: (items) => ({
        type: "SET_ITEMS",
        payload: items,
    }),

    setDelivery: (bool) => ({
        type: "SET_DELIVERY",
        payload: bool,
    }),

    addToCart: (id) => ({
        type: "ADD_TO_CART",
        payload: id,
    }),

    removeFromCart: (id) => ({
        type: "REMOVE_FROM_CART",
        payload: id,
    }),

    addQuantity: (id) => ({
        type: "ADD_QUANTITY",
        payload: id,
    }),

    subQuantity: (id) => ({
        type: "SUB_QUANTITY",
        payload: id,
    }),

    addAdress: (obj) => ({
        type: "ADD_ADRESS",
        payload: obj,
    }),

    clearCart: () => ({
        type: "CLEAR_CART",
        payload: [],
    }),

    fetchProducts: () => (dispatch) => {
        deliveryApi
            .getAll()
            .then(({ data }) => {
                dispatch(actions.setProducts(data.data));
                let products = [];
                data.data.map((item) => {
                    return products.push(...item.products);
                });
                dispatch(actions.setItems(products));
            })
            .catch((error) => console.log(error));
    },

    sendData: (data) => (dispatch) => {
        deliveryApi
            .sendCart(data)
            .then(({ data }) => {
                console.log(data.message);
                dispatch(actions.clearCart());
            })
            .catch((error) => console.log(error));
    },
};

export default actions;
