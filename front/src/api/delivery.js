import { axios } from "../core/";

const deliveryApi = {
    getAll: () => axios.get("/products"),
    sendCart: (cartData) => axios.post("/sendcart", cartData),
};

export default deliveryApi;