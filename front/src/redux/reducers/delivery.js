const initialState = {
    products: null,
    items: [],
    delivery: false,
    cart: [],
    total: 0,
};

export default function deliveryReducer(state = initialState, { type, payload }) {
    switch (type) {
        case "SET_PRODUCTS_BY_CATEGORY":
            return {
                ...state,
                products: payload,
            };

        case "SET_ITEMS":
            return {
                ...state,
                items: payload,
            };

        case "SET_DELIVERY":
            return {
                ...state,
                delivery: payload,
            };
        case "CLEAR_CART":
            return {
                ...state,
                cart: payload,
                total: 0,
            };
        case "ADD_TO_CART": {
            let addedItem = state.items.find((item) => item.id === payload);
            let existed_item = state.cart.find((item) => payload === item.id);
            if (existed_item) {
                addedItem.quantity += 1;
                return {
                    ...state,
                    total: state.total + addedItem.price,
                };
            } else {
                addedItem.quantity = 1;
                let newTotal = state.total + addedItem.price;

                return {
                    ...state,
                    cart: [...state.cart, addedItem],
                    total: newTotal,
                };
            }
        }
        case "REMOVE_FROM_CART": {
            let itemToRemove = state.cart.find((item) => payload === item.id);
            let new_items = state.cart.filter((item) => payload !== item.id);
            let newTotal =
                state.total - itemToRemove.price * itemToRemove.quantity;
            return {
                ...state,
                cart: new_items,
                total: newTotal,
            };
        }
        case "ADD_QUANTITY": {
            let addedItem = state.items.find((item) => item.id === payload);
            addedItem.quantity += 1;
            let newTotal = state.total + addedItem.price;
            return {
                ...state,
                total: newTotal,
            };
        }
        case "SUB_QUANTITY": {
            let addedItem = state.items.find((item) => item.id === payload);
            if (addedItem.quantity === 1) {
                let new_items = state.cart.filter(
                    (item) => item.id !== payload,
                );
                let newTotal = state.total - addedItem.price;
                return {
                    ...state,
                    cart: new_items,
                    total: newTotal,
                };
            } else {
                addedItem.quantity -= 1;
                let newTotal = state.total - addedItem.price;
                return {
                    ...state,
                    total: newTotal,
                };
            }
        }
        case "ADD_ADRESS":
            return {
                ...state,
                cart: [...state.cart, payload],
            };

        default:
            return state;
    }
};
